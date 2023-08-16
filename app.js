function previewPPTX(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const pptxBlob = new Blob([e.target.result], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
            const pptxUrl = URL.createObjectURL(pptxBlob);
            document.getElementById('pptxPreview').setAttribute('src', pptxUrl);
        };

        reader.readAsArrayBuffer(input.files[0]);
    }
}

function convertToText() {
    const pptxFile = document.getElementById('pptxFile').files[0];
    if (!pptxFile) {
        alert('Please select a PPTX file and preview it before converting.');
        return;
    }

    extractTextFromPPTX(pptxFile).then(pptxText => {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = pptxText;
    }).catch(err => {
        console.error('Error while extracting text:', err);
    });
}

function extractTextFromPPTX(pptxFile) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const pptxData = e.target.result;

            // Use JSZip to read the PPTX file
            JSZip.loadAsync(pptxData).then(zip => {
                const slides = [];
                zip.forEach((relativePath, zipEntry) => {
                    if (zipEntry.name.startsWith('ppt/slides/slide')) {
                        slides.push(zipEntry.async('string'));
                    }
                });

                return Promise.all(slides);
            }).then(slidesData => {
                let pptxText = '';
                slidesData.forEach((slideData, index) => {
                    pptxText += `Slide ${index + 1}:\n\n${slideData}\n\n`;
                });

                resolve(pptxText);
            }).catch(err => {
                reject(err);
            });
        };

        reader.readAsArrayBuffer(pptxFile);
    });
}

document.getElementById('pptxFile').addEventListener('change', function () {
    previewPPTX(this);
});
