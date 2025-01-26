function setupModal(clickableDivId, modalId) {
  const clickableDiv = document.getElementById(clickableDivId);
  const modal = document.getElementById(modalId);

  clickableDiv.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
}

function saveSignature(placeholderId, modalId, canvasId) {
  const placeholder = document.getElementById(placeholderId);
  const canvas = document.getElementById(canvasId);
  const dataURL = canvas.toDataURL('image/png');
  placeholder.innerHTML = `<img src="${dataURL}" alt="Signature">`;
  closeModal(modalId);
}

function clearCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

function setupCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  let isDrawing = false;

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  });

  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath();
  });

  canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
    ctx.closePath();
  });
}

// Setup modals and canvases
setupModal('clickableDiv1', 'signatureModal1');
setupModal('clickableDiv2', 'signatureModal2');
setupCanvas('signatureCanvas1');
setupCanvas('signatureCanvas2');














  // Function to allow only one checkbox to be selected at a time
  function checkOnlyOne(current, otherIds) {
    otherIds.forEach(id => {
      const otherCheckbox = document.getElementById(id);
      if (current.checked) {
        otherCheckbox.checked = false; // Uncheck the other checkboxes
      }
    });
  }

function showPreview(event) {
  const preview = document.getElementById('image-preview');
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result; // Update img src with selected image
    };
    reader.readAsDataURL(file);
  }
}








