import { Platform } from 'react-native';
import RNFS from 'react-native-fs';
import { FileInfo } from '../interface';

/**
 * 通过文件URI获取文件信息（大小和MIME类型）
 * @param fileUri 文件URI (如 file:///path/to/file.jpg)
 * @returns Promise<FileInfo> 包含文件大小(字节)、MIME类型和格式化大小的对象
 */
export async function getFileInfo(fileUri: string): Promise<FileInfo> {
  try {
    const processedUri = processFilePath(fileUri);
    const fileStats = await RNFS.stat(processedUri);

    return {
      fileSize: fileStats.size,
      type: getMimeType(fileUri),
    };
  } catch (error) {
    console.error('获取文件信息失败:', error);
    throw new Error('无法获取文件信息');
  }
}

// 处理不同平台的文件路径
function processFilePath(uri: string): string {
  if (Platform.OS === 'ios') {
    return decodeURIComponent(uri.replace('file://', ''));
  }
  return uri;
}

function getMimeType(originalUri: string): string {
  const extension = originalUri.split('.').pop()?.toLowerCase() || '';
  const mimeFromExtension = getMimeFromExtension(extension);

  return mimeFromExtension;
}

// 通过扩展名获取MIME类型
function getMimeFromExtension(ext: string): string {
  const mimeTypes: Record<string, string> = {
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    bmp: 'image/bmp',
  };
  return mimeTypes[ext] || '';
}
