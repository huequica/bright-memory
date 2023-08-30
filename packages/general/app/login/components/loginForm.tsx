import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { loginFormSchema } from '../model';
import { FormGroup, TextInput } from '@/components/Form';
import { Button } from '@/components/Button';

type LoginFormValue = z.infer<typeof loginFormSchema>;

interface Props {
  onSubmit: (values: LoginFormValue) => void | Promise<void>;
}

export const LoginForm: FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormValue>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { loginName: '', password: '' },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <TextInput
          control={control}
          errors={errors}
          name={'loginName'}
          label={'loginName'}
        />
        <TextInput
          control={control}
          errors={errors}
          name={'password'}
          label={'password'}
          type={'password'}
          autoComplete={'current-password'}
        />

        <Button variant={'contained'} type={'submit'}>
          送信
        </Button>
      </FormGroup>
    </form>
  );
};
