// simple year update
document.getElementById && (document.getElementById('year').innerText = new Date().getFullYear());

// mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if(navToggle){
  navToggle.addEventListener('click', ()=> {
    if(mainNav.style.display === 'flex' || mainNav.style.display === '') mainNav.style.display = 'none';
    else mainNav.style.display = 'flex';
  });
}

// client-side article search
const input = document.getElementById('searchInput');
const list = document.getElementById('articleList');
if(input && list){
  input.addEventListener('input', function(){
    const q = this.value.trim().toLowerCase();
    const items = list.querySelectorAll('li');
    items.forEach(li => {
      const title = li.getAttribute('data-title') || '';
      const author = li.getAttribute('data-author') || '';
      const keywords = li.getAttribute('data-keywords') || '';
      const text = (title + ' ' + author + ' ' + keywords).toLowerCase();
      li.style.display = text.indexOf(q) > -1 ? '' : 'none';
    });
  });
}
