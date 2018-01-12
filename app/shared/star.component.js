"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var starComponent = /** @class */ (function () {
    function starComponent() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    starComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 86 / 5;
    };
    starComponent.prototype.onStar = function () {
        this.ratingClicked.emit("The rating clicke id " + this.rating);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], starComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], starComponent.prototype, "ratingClicked", void 0);
    starComponent = __decorate([
        core_1.Component({
            selector: 'edu-star',
            templateUrl: 'app/shared/star.component.html',
            styleUrls: ['app/shared/star.component.css']
        })
    ], starComponent);
    return starComponent;
}());
exports.starComponent = starComponent;
/*function add(a,b){
    return a+b
}

add(1,2)*/ 
//# sourceMappingURL=star.component.js.map