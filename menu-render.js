(function () {
  "use strict";
  var M = window.EMILS_MENU;
  if (!M) return;

  function priceText(prices) {
    return prices.map(function (p) { return p + ",–"; }).join(" / ");
  }

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function renderRow(item, priceLabels) {
    var row = el("div", "menu-row");
    var left = el("div", "menu-row-left");

    var nameLine = el("div", "menu-row-name");
    var nameText = item.nr ? item.nr + ". " + item.name : item.name;
    if (item.variant) nameText += " <span style='font-weight:500;color:var(--muted);font-size:0.85em;'>(" + item.variant + ")</span>";
    nameLine.innerHTML = nameText;
    if (item.star) {
      var star = el("span", "star", "★★★★★");
      nameLine.appendChild(star);
    }
    left.appendChild(nameLine);

    if (item.desc) {
      left.appendChild(el("div", "menu-row-desc", item.desc));
    }
    if (item.allergens) {
      left.appendChild(el("div", "menu-row-allergen", "Allergener: [" + item.allergens + "]"));
    }

    var priceWrap = el("div", "menu-row-price");
    if (priceLabels && priceLabels.length === item.prices.length && item.prices.length > 1) {
      priceWrap.innerHTML = item.prices.map(function (p, i) {
        return "<span class='price-pair'><small>" + priceLabels[i] + "</small>" + p + ",–</span>";
      }).join("");
    } else {
      priceWrap.textContent = priceText(item.prices);
    }

    row.appendChild(left);
    row.appendChild(priceWrap);
    return row;
  }

  function renderGroup(containerId, group) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var cols = el("div", "menu-cols");
    group.items.forEach(function (item) {
      cols.appendChild(renderRow(item, group.priceLabels));
    });
    container.appendChild(cols);

    var notes = [];
    if (group.note) notes.push(group.note);
    if (group.allergenNote) notes.push("<strong>Allergener:</strong> " + group.allergenNote.replace(/^Allergener[^:]*:\s*/, ""));
    if (notes.length) {
      var box = el("div", "allergen-box", notes.join("<br>"));
      container.appendChild(box);
    }
  }

  function renderExtra(containerId, group) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var grid = el("div", "extra-grid");
    group.items.forEach(function (item) {
      var row = el("div", "menu-row");
      row.appendChild(el("div", "menu-row-left", "<div class='menu-row-name'>" + item.name + "</div>"));
      row.appendChild(el("div", "menu-row-price", item.price + ",–"));
      grid.appendChild(row);
    });
    container.appendChild(grid);
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderGroup("menu-kebab", M.kebab);
    renderGroup("menu-kebabtallerken", M.kebabtallerken);
    renderGroup("menu-burger", M.burger);
    renderExtra("menu-extra", M.extra);
    renderGroup("menu-pizza", M.pizza);

    var legend = document.getElementById("allergen-legend");
    if (legend) legend.textContent = M.allergenLegend;
  });
})();
