document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("publish-form");
  const usernameInput = document.getElementById("username");
  const contentInput = document.getElementById("content");
  const usernameError = document.getElementById("username-error");
  const contentError = document.getElementById("content-error");

  // 表单验证函数
  function validateForm() {
    let isValid = true;
    usernameError.style.display = "none";
    contentError.style.display = "none";

    // 验证用户名
    if (!usernameInput.value.trim()) {
      usernameError.textContent = "请输入用户名";
      usernameError.style.display = "block";
      isValid = false;
    } else if (usernameInput.value.trim().length < 2) {
      usernameError.textContent = "用户名至少2个字符";
      usernameError.style.display = "block";
      isValid = false;
    }

    // 验证内容
    if (!contentInput.value.trim()) {
      contentError.textContent = "请输入分享内容";
      contentError.style.display = "block";
      isValid = false;
    } else if (contentInput.value.trim().length > 500) {
      contentError.textContent = "内容不能超过500个字符";
      contentError.style.display = "block";
      isValid = false;
    }

    return isValid;
  }

  // 表单提交事件
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 阻止默认提交行为

    if (validateForm()) {
      const username = usernameInput.value.trim();
      const content = contentInput.value.trim();

      // 调用main.js的添加动态方法（实际项目中这里会调用后端接口）
      addPost(username, content);

      alert("发布成功！");
      form.reset(); // 清空表单
      window.location.href = "index.html"; // 跳转到首页
    }
  });
});