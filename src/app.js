/* Simple Notification v1.1.0 */

if (typeof jQuery === "undefined") {
  throw new Error(
    "Simple Notification JavaScript requires jQuery. jQuery must be included before Simple Notification JavaScript."
  );
}

(function($) {
  var version = $.fn.jquery.split(" ")[0].split(".");
  if (
    (version[0] < 2 && version[1] < 9) ||
    (version[0] == 1 && version[1] == 9 && version[2] < 1) ||
    version[0] >= 4
  ) {
    throw new Error(
      "Simple Notification JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
    );
  }
})(jQuery);

(function(define) {
  define(["jquery"], function($) {
    return (function(config) {
      var container, slot, message, title, inner, close, icon;

      container = $(".ondev-notification");

      var notificationType = {
        danger: "danger",
        info: "info",
        success: "success",
        warning: "warning"
      };

      var simpleNotify = {
        basic: basic,
        info: info,
        success: success,
        danger: danger,
        warning: warning    
      };

      return simpleNotify;

      function basic(message, title, optionsOverride) {
        return notify({
          type: "",
          title: title,
          content: message,
          iconCls: getOptions().iconCls,
          optionsOverride: optionsOverride
        });
      }

      function info(message, title, optionsOverride) {
        return notify({
          type: notificationType.info,
          title: title,
          content: message,
          iconCls: getOptions().iconCls,
          optionsOverride: optionsOverride
        });
      }

      function success(message, title, optionsOverride) {
        return notify({
          type: notificationType.success,
          title: title,
          content: message,
          iconCls: getOptions().iconCls,
          optionsOverride: optionsOverride
        });
      }

      function danger(message, title, optionsOverride) {
        return notify({
          type: notificationType.danger,
          title: title,
          content: message,
          iconCls: getOptions().iconCls,
          optionsOverride: optionsOverride
        });
      }

      function warning(message, title, optionsOverride) {
        return notify({
          type: notificationType.warning,
          title: title,
          content: message,
          iconCls: getOptions().iconCls,
          optionsOverride: optionsOverride
        });
      }

      function notify(map) {
        var options = getOptions();
        options.type = map.type || "";
        var iconClass = map.iconCls || options.iconCls;

        if (typeof map.optionsOverride !== "undefined") {
          options = $.extend(options, map.optionsOverride);
          iconClass = map.optionsOverride.iconCls || iconClass;
        }

        if (!container.length) {
          container = $("<ul>", { class: "ondev-notification" });
        }

        slot = $("<li>", { class: "ondev-notification-slot" });
        var $toastElement = slot;
        message = $("<div>", {
          class: "ondev-notification-message ondev-notification-" + options.type
        });
        inner = $("<div>", { class: "ondev-notification-message-inner" });

        if (options.closeTrigger) {
          close = $("<button>", {
            class: "close ondev-notification-close",
            click: function() {
              closeMsg($(this).parents(".ondev-notification-slot"));
            }
          });

          close.html("&times;");
          close.appendTo(message);
        }

        container.appendTo("body");
        message.appendTo(slot);
        inner.html(options.content);
        inner.appendTo(message);

        if (options.title != "") {
          title = $("<h5>", { class: "ondev-notification-title" });
          title.html(options.title);
          title.prependTo(inner);
        }

        if (options.lifetime > 0 && !options.sticky) {      
          setTimeout(function() {          
            closeMsg($toastElement);
          }, options.lifetime);
        }

        slot
          .appendTo(container)
          .hide()
          .slideDown(750);
    
        if (options.iconCls !== "") {
          icon = $("<i>", { class: "ondev-notification-icon" });

          slot.addClass("ondev-notification-has-icon");
          icon.addClass(options.iconCls);
          icon.appendTo(message);
        }        
      }

      function closeMsg($toastElement) {      
        $toastElement.slideUp(750, function() {
          $(this).remove();
        });
      }

      function getDefaults() {
        return {
          type: "",
          title: "",
          content: "",
          lifetime: 5000,
          sticky: false,
          closeTrigger: true,
          iconCls: ""
        };
      }

      function getOptions() {
        return $.extend(getDefaults(), config);
      }
    })();
  });
})(
  typeof define === "function" && define.amd
    ? define
    : function(deps, factory) {
        if (typeof module !== "undefined" && module.exports) {
          module.exports = factory(require("jquery"));
        } else {
          window.simpleNotify = factory(window.jQuery);
        }
      }
);
