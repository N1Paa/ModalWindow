const blogArticle = document.querySelector('.blog_article');

// появление фона у header
document.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        document.querySelector('.header').style.background = '#c0301c'
    } else (document.querySelector('.header').style.background = 'transparent')
    
});

// подсветка текста при наведении на блог 

document.addEventListener('mouseover', (e)=> {
    let blogArticle = e.target.closest('.blog_content');
    if (blogArticle) {
        blogArticle.querySelectorAll('.blog_text').forEach(item => item.classList.add('active'));
    }
});

// удаление подсветки при отводе мыши

document.addEventListener('mouseout', (e)=> {
    let blogArticle = e.target.closest('.blog_content');
    if (blogArticle) {
        blogArticle.querySelectorAll('.blog_text').forEach(item => item.classList.remove('active'));
    }
});