import Form, { useForm, FormProps, Controller } from './Form';
import FormItem, { FormItemProps } from './Item';
import FormInput, {
  FormTextarea,
  FormInputProps,
  FormTextareaProps,
} from './Input';
import Options, {
  FormOptionsProps,
  FormOptionGroup,
  FormOptionGroupProps,
} from './Options';
import Select, { FormSelectProps } from './Select';
import DatePicker, { FormDatePickerProps } from './DatePicker';
import Radio, { FormRadioProps } from './Radio';
import {
  FormCheckboxProps,
  FormCheckboxGroupProps,
  FormCheckbox,
  FormCheckboxGroup,
} from './Checkbox';
import AmountInput, { FormAmountInputProps } from './AmountInput';

import withFormItem, {
  createFormComponent,
  createFormComponents,
} from './withFormItem';
import { attachPropertiesToComponent } from '../../core/helpers';

// 导出验证器
import * as validators from './validators';
import Picker, { FormPickerProps } from './Picker';
import FormTagInput, { FormTagInputProps } from './TagInput';

// 从 react-hook-form 导入需要的方法和类型
import {
  useController,
  useFormContext,
  useWatch,
  useFormState,
  useFieldArray,
  FormProvider,
  get,
  set,
  appendErrors,
  createFormControl,
} from 'react-hook-form';
import FormPasswordInput from './PasswordInput';
import FormSingleCheckOptions from './SingleCheckOptions';
import FormDateRange, { FormDateRangeProps } from './DateRange';

// 挂载子组件和方法到 Form 上
const FormWithSubComponents = attachPropertiesToComponent(Form, {
  // 核心组件
  FormProvider: FormProvider,
  Item: FormItem,

  // 表单控件组件
  Input: FormInput,
  TextArea: FormTextarea,
  Options: Options,
  OptionGroup: FormOptionGroup,
  Select: Select,
  Picker: Picker,
  DatePicker: DatePicker,
  Radio: Radio,
  Checkbox: FormCheckbox,
  CheckboxGroup: FormCheckboxGroup,
  AmountInput: AmountInput,
  TagInput: FormTagInput,
  PasswordInput: FormPasswordInput,
  SingleCheckOptions: FormSingleCheckOptions,
  DateRange: FormDateRange,

  // Form hooks
  useForm: useForm,
  useFormContext: useFormContext,
  useController: useController,
  useWatch: useWatch,
  useFormState: useFormState,
  useFieldArray: useFieldArray,

  // 高阶组件和工具
  Controller,
  withFormItem,
  createFormComponent,
  createFormComponents,

  get,
  set,
  appendErrors,
  createFormControl,

  // 验证器
  validators,
});

export default FormWithSubComponents;

// 类型导出 - 组件类型
export type {
  FormProps,
  FormItemProps,
  FormInputProps,
  FormTextareaProps,
  FormOptionsProps,
  FormSelectProps,
  FormDatePickerProps,
  FormPickerProps,
  FormRadioProps,
  FormCheckboxProps,
  FormCheckboxGroupProps,
  FormAmountInputProps,
  FormTagInputProps,
  FormOptionGroupProps,
  FormDateRangeProps,
};
