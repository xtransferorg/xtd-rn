import Card from '_global/Card';
import React from 'react';
import { Uploader } from '@xrnjs/ui';

const CommonFileDemo = () => {
  return (
    <Card title={'通用文件上传模式'}>
      <Uploader
        listType={Uploader.UploadListTypes.Text}
        title={'标题'}
        showIcon
        required
        description={
          '请提供采购合同，加盖双方公章或合同章的鲜章；1kb<单个文件大小<3MB。'
        }
        imgQuality={0.5} //设置图片的质量, 业务根据自身需要设置即可
        onChange={(files) => {
          console.log('onChange==', files);
        }}
        onDownload={(file) => console.log('onDownload==', file)}
        onRemove={(file, index) => {
          console.log('onRemove===', file, index);
          return true; //删除
        }}
        beforeUpload={(newFiles) => {
          console.log('beforeUpload===', newFiles);
          // 模拟对上传数据进行修改
          const userNewFiles = newFiles.map((file) => ({
            ...file,
            attachmentType: 'img/png',
          }));
          return userNewFiles;
        }}
        doUpload={(newFiles) => {
          console.log('doUpload==', newFiles);
          // 模拟文件上传
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const isOk = Math.random() > 0.5; // 50%成功率
              isOk ? resolve(true) : reject('模拟上传失败原因');
            }, 5000);
          });
        }}
        onSuccess={(newFiles, allFiles) => {
          console.log('onSuccess==', newFiles, allFiles);
        }}
        onError={(newFiles, err) => {
          console.log('onError==', newFiles, err);
          // 模拟是否重新上传
          const isRetry = Math.random() > 0.5; // 50%重新上传
          return isRetry;
        }}
        onPreviewFile={(uri) => {
          console.log('onPreviewFile===', uri);
        }}
        maxCount={6} //最大上传文件数
        minSize={1 * 1000} // 文件最新提交1KB
        maxSize={3 * 1000 * 1000} //文件最大体积3M
      />

      <Uploader
        listType={Uploader.UploadListTypes.Text}
        title={'标题'}
        showIcon
        required
        description={'请提供采购合同，加盖双方公章或合同章的鲜章;'}
        subTip={'JPG、JPEG、PNG'}
      />
    </Card>
  );
};

export default CommonFileDemo;
