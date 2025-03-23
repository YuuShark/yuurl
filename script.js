// メニュー
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    const menuLinks = document.querySelectorAll('.nav-menu a');
        
    if (localStorage.getItem('menuOpen') === 'true') {
        menu.classList.add('show');
    }
        // メニューの表示、非表示の処理をする
    function toggleMenu(event) {
         event.stopPropagation();
        // var menu = document.getElementById('menu');
        menu.classList.toggle('show');

        // メニューの状態を保存
        localStorage.setItem('menuOpen', menu.classList.contains('show'));
    }

    // 画面外をクリックするとメニューが閉じる処理
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target) && menu.classList.contains('show')) {
            menu.classList.remove('show');
            localStorage.setItem('menuOpen', 'false');
        }
    });

    menuIcon.addEventListener("click", toggleMenu);

    const currentPage = window.location.pathname.endsWith('/') ? "./" : window.location.pathname.split('/').pop() || 'index.html';

    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === './' && currentPage === "./") {
            link.classList.add('active');
        } else if (href.replace('./', '') === currentPage) {
            link.classList.add('active');
        }

        // リンククリック時にメニューを閉じないようにする処理
        link.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});

// 説明文の動的処理
function toggleDescription(id) {
    var descriptions = document.querySelectorAll(".description");

    descriptions.forEach(desc => {
        if (desc.id === id) {
            desc.classList.toggle("show");
        } else {
            desc.classList.remove("show");
        }
    })
}