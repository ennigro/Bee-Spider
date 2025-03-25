var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bug = /** @class */ (function () {
    function Bug(emojiElement) {
        this.emojiElement = emojiElement;
    }
    return Bug;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee(emojiElement) {
        var _this = _super.call(this, emojiElement) || this;
        _this.emoji = "🐝";
        return _this;
    }
    Bee.prototype.render = function () {
        this.emojiElement.innerText = this.emoji;
    };
    return Bee;
}(Bug));
var Spider = /** @class */ (function (_super) {
    __extends(Spider, _super);
    function Spider(emojiElement) {
        var _this = _super.call(this, emojiElement) || this;
        _this.emoji = "🕷️";
        return _this;
    }
    Spider.prototype.render = function () {
        this.emojiElement.innerText = this.emoji;
    };
    return Spider;
}(Bug));
function isSelect(element) {
    return element instanceof HTMLSelectElement;
}
var bugEmojiElement = document.querySelector('#bug-emoji');
var bugMap = {
    "bee": new Bee(bugEmojiElement),
    "spider": new Spider(bugEmojiElement)
};
var selectElement = document.querySelector('#species');
selectElement.addEventListener("change", function (e) {
    if (isSelect(e.target)) {
        var species = e.target.value;
        var bug = bugMap[species];
        if (bug) {
            bug.render();
        }
    }
});
