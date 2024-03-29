import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormGroup,
  TextInput,
  SubmitButton,
  Container,
  Stack,
} from '@/components';
import { LoginFormSchema } from '../model';

type LoginFormValue = z.infer<typeof LoginFormSchema>;

interface Props {
  onSubmit: (values: LoginFormValue) => void | Promise<void>;
}

export const LoginForm: FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormValue>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: { loginName: '', password: '' },
  });

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Stack direction="column" spacing={2}>
            <TextInput
              control={control}
              errors={errors}
              name={'loginName'}
              label={'loginName'}
              autoComplete={'username'}
            />
            <TextInput
              control={control}
              errors={errors}
              name={'password'}
              label={'password'}
              type={'password'}
              autoComplete={'current-password'}
            />

            <SubmitButton>ログイン</SubmitButton>
          </Stack>
        </FormGroup>
      </form>
    </Container>
  );
};
