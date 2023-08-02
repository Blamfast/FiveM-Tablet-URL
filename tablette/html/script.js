window.addEventListener('message', function(event) {
    switch (event.data.action) {
        case 'open':
            document.getElementById('close-button').style.display = 'block';
            document.getElementById('website').style.display = 'block';
            document.getElementById('tablet').style.display = 'block';
            break;
        case 'close':
            document.getElementById('close-button').style.display = 'none';
            document.getElementById('website').style.display = 'none';
            document.getElementById('tablet').style.display = 'none';
            break;
    }
});

document.getElementById('close-button').addEventListener('click', function() {
    fetch(`https://tablette/closeUI`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            action: 'closeUI',
        }),
    });
});
