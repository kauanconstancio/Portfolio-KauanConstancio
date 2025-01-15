// function filterCertificates(category) {
//     const items = document.querySelectorAll('.item');
//     items.forEach(item => {
//         if (category === 'all' || item.classList.contains(category)) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }

// // Show all items on initial load
// filterCertificates('all');

function filterCertificates(category) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

// Show all items on initial load
filterCertificates('all');