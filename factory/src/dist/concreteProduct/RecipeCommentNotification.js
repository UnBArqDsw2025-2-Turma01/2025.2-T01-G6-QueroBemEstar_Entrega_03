"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeCommentNotification = void 0;
const Notification_1 = require("../product/Notification");
class RecipeCommentNotification extends Notification_1.Notification {
    deliver() { console.log("Deliver: recipe comment"); }
    dismiss() { console.log("Dismiss: recipe comment"); }
    log() { console.log("Log: recipe comment"); }
}
exports.RecipeCommentNotification = RecipeCommentNotification;
