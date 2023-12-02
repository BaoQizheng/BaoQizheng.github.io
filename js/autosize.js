// 检测设备类型
function detectDeviceType() {
    var userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.indexOf("mobile") !== -1) {
      // 如果是移动设备，放大网页中的所有控件
      zoomIn();
    }
  }
  
  // 放大网页中的所有控件
  function zoomIn() {
    var allElements = document.getElementsByTagName("*");
    
    for (var i = 0; i < allElements.length; i++) {
      var element = allElements[i];
      element.style.zoom = "150%"; // 根据需要调整放大倍数
    }
  }
  
  // 在页面加载完成后执行检测设备类型的函数
  window.onload = function() {
    detectDeviceType();
  };
  