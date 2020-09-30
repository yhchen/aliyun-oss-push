"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ali_oss_1 = __importDefault(require("ali-oss"));
var path = __importStar(require("path"));
var client = new ali_oss_1.default({
    region: 'oss-cn-hangzhou',
    accessKeyId: 'LTAI4GKvjjZUDAcxJ52qhNDX',
    accessKeySecret: 'doUlbain22Cfn0fclijT1ZT3uWpn4S',
    bucket: 'fishingjoy'
});
var BaseDir = path.dirname(process.argv0);
var RemoteRootDir = 'res/sub_res_package';
var LocalSubPath = 'sub_res_package';
var LocalRootDir = path.join(BaseDir, LocalSubPath);
function put(remotePath, localFilePath) {
    return __awaiter(this, void 0, void 0, function () {
        var r1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // 'object'表示上传到OSS的object名称，'localfile'表示本地文件或者文件路径。
                    console.log("put local file: " + localFilePath + " to remote: " + remotePath);
                    return [4 /*yield*/, client.put(remotePath, localFilePath)];
                case 1:
                    r1 = _a.sent();
                    console.log("put remote file: " + remotePath + " size: " + r1.res.size);
                    console.log("" + JSON.stringify(r1));
                    return [2 /*return*/, r1.res.status == 200];
                case 2:
                    err_1 = _a.sent();
                    console.error('error: %j', err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/, false];
            }
        });
    });
}
put("/res/test", "/Users/langrensha0016/dev/github/fj/trunk/workspace/client_res/game/android/resversion.ver").then(function () {
    console.log("success");
}).catch(function () {
    console.error("failure");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNkI7QUFDN0IseUNBQTZCO0FBRzdCLElBQU0sTUFBTSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUN0QixNQUFNLEVBQUUsaUJBQWlCO0lBQ3pCLFdBQVcsRUFBRSwwQkFBMEI7SUFDdkMsZUFBZSxFQUFFLGdDQUFnQztJQUNqRCxNQUFNLEVBQUUsWUFBWTtDQUN2QixDQUFDLENBQUM7QUFFSCxJQUFNLE9BQU8sR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQyxJQUFNLGFBQWEsR0FBQyxxQkFBcUIsQ0FBQztBQUMxQyxJQUFNLFlBQVksR0FBQyxpQkFBaUIsQ0FBQztBQUNyQyxJQUFNLFlBQVksR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUVwRCxTQUFlLEdBQUcsQ0FBQyxVQUFrQixFQUFFLGFBQXFCOzs7Ozs7O29CQUVwRCxxREFBcUQ7b0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLGFBQWEsb0JBQWUsVUFBWSxDQUFDLENBQUM7b0JBQzlELHFCQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxFQUFBOztvQkFBaEQsRUFBRSxHQUFHLFNBQTJDO29CQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFvQixVQUFVLGVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFNLENBQUMsQ0FBQztvQkFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFHLENBQUMsQ0FBQztvQkFDckMsc0JBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFDOzs7b0JBRTVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUcsQ0FBQyxDQUFDOzt3QkFFcEMsc0JBQU8sS0FBSyxFQUFDOzs7O0NBQ2hCO0FBR0QsR0FBRyxDQUFDLFdBQVcsRUFBRSw0RkFBNEYsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNoSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUEifQ==