"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluxWebsockets = exports.Flux = exports.fluxSocket = exports.flux = void 0;
/*
 * Copyright (c) 2024 Flux Payment Solutions Company
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var FluxEntry_1 = require("./FluxEntry");
Object.defineProperty(exports, "flux", { enumerable: true, get: function () { return FluxEntry_1.flux; } });
Object.defineProperty(exports, "fluxSocket", { enumerable: true, get: function () { return FluxEntry_1.fluxSocket; } });
var Flux_1 = require("./Flux");
Object.defineProperty(exports, "Flux", { enumerable: true, get: function () { return Flux_1.Flux; } });
var FluxSockets_1 = require("./FluxSockets");
Object.defineProperty(exports, "FluxWebsockets", { enumerable: true, get: function () { return FluxSockets_1.FluxWebsockets; } });
//# sourceMappingURL=index.js.map