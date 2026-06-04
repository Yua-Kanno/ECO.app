document.addEventListener('DOMContentLoaded', () => {
  // 💡 ログインチェックの強制移動を一時的に無効化しました
  /*
  const currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
  if (!currentUser) {
    location.href = '../全体/ログイン機能/signin.html';
    return;
  }
  */

  const page = document.querySelector('.page-url');
  if (!page) return;

  const placeholder = page.querySelector('.placeholder');
  // 💡 もともと「⚠️外部リンクに飛びます⚠️」が入っているので、ここが上書きされないように調整しました
  if (placeholder && placeholder.textContent.trim() === '') {
    placeholder.textContent = '外部リンクはここに表示されます';
  }

  const title = page.querySelector('.page-title');
  if (title) {
    title.textContent = '分別ヒント';
  }
});