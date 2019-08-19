let date = new Date();

console.log('what?');

$(() => {
    console.log('what?');
    $('#copywrite')
        .empty()
        .append('Copyright &copy; ' + date.getFullYear()  + ' Alex Hadley');
});
