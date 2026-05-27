// 模拟存储的动态数据（实际项目中会从后端接口获取）
let posts = [
  {
    id: 1,
    username: "小明",
    content: "今天天气真好，分享一下好心情！",
    time: "2026-05-27 10:30"
  },
  {
    id: 2,
    username: "小红",
    content: "分享一本超好看的书，推荐给大家！",
    time: "2026-05-27 11:15"
  }
];

// 渲染信息流
function renderFeed() {
  const feedList = document.getElementById("feed-list");
  feedList.innerHTML = ""; // 清空现有内容

  // 按时间倒序渲染
  posts.sort((a, b) => new Date(b.time) - new Date(a.time)).forEach(post => {
    const article = document.createElement("article");
    article.className = "post-card";
    article.innerHTML = `
      <div class="post-header">
        <span class="username">${post.username}</span>
        <time class="post-time">${post.time}</time>
      </div>
      <p class="post-content">${post.content}</p>
    `;
    feedList.appendChild(article);
  });
}

// 页面加载时渲染
document.addEventListener("DOMContentLoaded", renderFeed);

// 给其他页面提供添加动态的方法
function addPost(username, content) {
  const newPost = {
    id: posts.length + 1,
    username,
    content,
    time: new Date().toLocaleString("zh-CN")
  };
  posts.unshift(newPost); // 插入到列表最前面
  renderFeed(); // 重新渲染
}