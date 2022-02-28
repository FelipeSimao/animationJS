const item = document.querySelector('.item')


item.animate([
    { borderRadius: '0px' },
    { transform: 'translateY(0px)' },
    { transform: 'rotate(0deg)' },
    { borderRadius: '50px' },
    { transform: 'translateY(100px)' },
    { transform: 'rotate(180deg)' }
],{
    duration: 3000,
    easing: 'ease-in-out',
    direction: 'alternate',
    iterations: Infinity
})
