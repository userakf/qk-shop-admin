import { ElForm } from 'element-plus'
import { FormItemRule } from 'element-plus';

export type IElForm = InstanceType<typeof ElForm>

export type FormRule = Record<string, FormItemRule[]>