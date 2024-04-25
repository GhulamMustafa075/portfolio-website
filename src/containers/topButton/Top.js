import "./Top.scss";

const ScrollToTopButton = () => {
  const TopEvent = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  };
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  };

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
};
export default ScrollToTopButton;
