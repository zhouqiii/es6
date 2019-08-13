//把task下面的文件都加进来，让gulp启动时去执行，相当于gulp的注册文件
import requireDir from 'require-dir'

requireDir('./tasks');