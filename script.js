document.getElementById('generateBtn').addEventListener('click', function() {
    const inputs = [
      document.getElementById('matchType').value,
      document.getElementById('cycles').value,
      document.getElementById('teamNumber').value,
      document.getElementById('matchNumber').value,            // Match Number
      document.getElementById('autoPosition').value,           // Auto Position
      document.getElementById('autoSampleScored').value,       // Auto Sample Scored
      document.getElementById('autoSampleMissed').value,       // Auto Sample Missed
      document.getElementById('autoSpecimenScored').value,     // Auto Specimen Scored
      document.getElementById('park').value,                   // Park?
      document.getElementById('teleSamplesScored').value,      // Tele Samples Scored
      document.getElementById('teleSamplesMissed').value,      // Tele Samples Missed
      document.getElementById('teleSpecimensScored').value,    // Tele Specimens Scored
      document.getElementById('teleSpecimensMissed').value,    // Tele Specimens Missed
      document.getElementById('ascentTier').value,             // Ascent Tier
      document.getElementById('ascentTime').value,
      document.getElementById('autoSpecimenMissed').value,           // Ascent Time
      document.getElementById('partnerClimbing').value,        // Partner Climb?
      document.getElementById('comments').value                // Comments
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
      document.getElementById('cycles').value,
      document.getElementById('teamNumber').value,
      document.getElementById('matchNumber').value,            // Match Number
      document.getElementById('autoPosition').value,           // Auto Position
      document.getElementById('autoSampleScored').value,       // Auto Sample Scored
      document.getElementById('autoSampleMissed').value,       // Auto Sample Missed
      document.getElementById('autoSpecimenScored').value,     // Auto Specimen Scored
      document.getElementById('park').value,                   // Park?
      document.getElementById('teleSamplesScored').value,      // Tele Samples Scored
      document.getElementById('teleSamplesMissed').value,      // Tele Samples Missed
      document.getElementById('teleSpecimensScored').value,    // Tele Specimens Scored
      document.getElementById('teleSpecimensMissed').value,    // Tele Specimens Missed
      document.getElementById('ascentTier').value,             // Ascent Tier
      document.getElementById('ascentTime').value,
      document.getElementById('autoSpecimenMissed').value,           // Ascent Time
      document.getElementById('partnerClimbing').value,        // Partner Climb?
      document.getElementById('comments').value                // Comments
    ];

    const qrData = inputs.join(',');
    navigator.clipboard.writeText(qrData).then(() => {
        alert('QR Code data copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.querySelectorAll('input, textarea, select').forEach(input => input.value = "");
});
