import alioss from 'ali-oss';
import * as path from 'path';
import * as fs from 'fs';

const client = new alioss({
    region: 'oss-cn-hangzhou',
    accessKeyId: 'LTAI4GKvjjZUDAcxJ52qhNDX',
    accessKeySecret: 'doUlbain22Cfn0fclijT1ZT3uWpn4S',
    bucket: 'fishingjoy'
});

const BaseDir=path.dirname(process.argv0);
const RemoteRootDir='res/sub_res_package';
const LocalSubPath='sub_res_package';
const LocalRootDir=path.join(BaseDir, LocalSubPath);

async function put(remotePath: string, localFilePath: string): Promise<boolean> {
    try {
        // 'object'表示上传到OSS的object名称，'localfile'表示本地文件或者文件路径。
        console.log(`put local file: ${localFilePath} to remote: ${remotePath}`);
        const r1 = await client.put(remotePath, localFilePath);
        console.log(`put remote file: ${remotePath} size: ${r1.res.size}`);
        console.log(`${JSON.stringify(r1)}`);
        return r1.res.status == 200;
    } catch (err) {
        console.error('error: %j', err);
    }
    return false;
}


put("/res/test", "/Users/langrensha0016/dev/github/fj/trunk/workspace/client_res/game/android/resversion.ver").then(()=>{
    console.log("success");
}).catch(()=>{
    console.error("failure");
})

