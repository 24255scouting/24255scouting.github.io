document.getElementById('generateBtn').addEventListener('click', function() {
    const inputs = [
        document.getElementById('matchType').value,
        document.getElementById('teamNumber').value,
        document.getElementById('matchNumber').value,
        document.getElementById('autoPosition').value,
        document.getElementById('autoSampleMissed').value,
        document.getElementById('autoSpecimenScored').value,
        document.getElementById('park').value,
        document.getElementById('cycles').value,
        document.getElementById('teleSamplesScored').value,
        document.getElementById('teleSamplesMissed').value,
        document.getElementById('ascentTier').value,
        document.getElementById('ascentTime').value,
        document.getElementById('partnerClimbing').value,
        document.getElementById('comments').value
    ];

    if (inputs.some(input => input === '')) {
        alert('Please fill in all fields.');
        return;
    }

    const qrData = inputs.join(',');
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}`;
    window.location.href = qrCodeUrl; // Redirect to QR code
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const inputs = [
        document.getElementById('matchType').value,
        document.getElementById('teamNumber').value,
        document.getElementById('matchNumber').value,
        document.getElementById('autoPosition').value,
        document.getElementById('autoSampleMissed').value,
        document.getElementById('autoSpecimenScored').value,
        document.getElementById('park').value,
        document.getElementById('cycles').value,
        document.getElementById('teleSamplesScored').value,
        document.getElementById('teleSamplesMissed').value,
        document.getElementById('ascentTier').value,
        document.getElementById('ascentTime').value,
        document.getElementById('partnerClimbing').value,
        document.getElementById('comments').value
    ];

    const qrData = inputs.join(',');
    navigator.clipboard.writeText(qrData).then(() => {
        alert('QR Code data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.querySelectorAll('input, textarea').forEach(input => input.value = '');
});
