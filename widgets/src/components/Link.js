import React from "react";

const Link = ({ className, href, children }) => {
  const clickLink = (event) => {
    // 按著control 或 command時點選可另開分頁
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a
      onClick={clickLink} //留意function不能加(),preventDefault 會失效
      className={className}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
