!(function (e, t) {
  "use strict";
  var r = !1,
    a = !1;
  if (t.querySelector) if (e.addEventListener) r = !0;
  if (((e.wp = e.wp || {}), !e.wp.receiveEmbedMessage))
    if (
      ((e.wp.receiveEmbedMessage = function (r) {
        var a = r.data;
        if (a)
          if (a.secret || a.message || a.value)
            if (!/[^a-zA-Z0-9]/.test(a.secret)) {
              var i,
                s,
                n,
                o,
                c,
                d = t.querySelectorAll(
                  'iframe[data-secret="' + a.secret + '"]'
                ),
                l = t.querySelectorAll(
                  'blockquote[data-secret="' + a.secret + '"]'
                );
              for (i = 0; i < l.length; i++) l[i].style.display = "none";
              for (i = 0; i < d.length; i++)
                if (((s = d[i]), r.source === s.contentWindow)) {
                  if ((s.removeAttribute("style"), "height" === a.message)) {
                    if ((n = parseInt(a.value, 10)) > 1e3) n = 1e3;
                    else if (~~n < 200) n = 200;
                    s.height = n;
                  }
                  if ("link" === a.message)
                    if (
                      ((o = t.createElement("a")),
                      (c = t.createElement("a")),
                      (o.href = s.getAttribute("src")),
                      (c.href = a.value),
                      c.host === o.host)
                    )
                      if (t.activeElement === s) e.top.location.href = a.value;
                }
            }
      }),
      r)
    )
      e.addEventListener("message", e.wp.receiveEmbedMessage, !1),
        t.addEventListener("DOMContentLoaded", i, !1),
        e.addEventListener("load", i, !1);
  function i() {
    if (!a) {
      a = !0;
      var e,
        r,
        i,
        s,
        n = -1 !== navigator.appVersion.indexOf("MSIE 10"),
        o = !!navigator.userAgent.match(/Trident.*rv:11\./),
        c = t.querySelectorAll("iframe.wp-embedded-content");
      for (r = 0; r < c.length; r++) {
        if (!(i = c[r]).getAttribute("data-secret"))
          (s = Math.random().toString(36).substr(2, 10)),
            (i.src += "#?secret=" + s),
            i.setAttribute("data-secret", s);
        if (n || o)
          (e = i.cloneNode(!0)).removeAttribute("security"),
            i.parentNode.replaceChild(e, i);
      }
    }
  }
})(window, document);
