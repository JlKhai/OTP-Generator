import { hasLength, useForm } from '@mantine/form'
import { Button, TextInput } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

const OtpReq = () => {
  const nav = useNavigate()
  const form = useForm({
    initialValues: { phoneNumber: '' },
    validate: {
      phoneNumber: hasLength({ min: 9, max: 11 }),
    },
  })

  return (
    <div className="body flex h-screen items-center justify-center">
      <div className="  flex flex-col  justify-center items-center  w-80 bg-blue-600 rounded-lg p-4 shadow-2xl  ">
        <h1 className=" text-2xl text-yellow-400 font-semibold my-5 select-none">
          Generate OTP
        </h1>
        <div className=" flex flex-col gap-4">
          <form
            onSubmit={form.onSubmit(() => {
              nav('/optinput')
            })}
          >
            <TextInput
              className=" min-w-[200px] max-w-[300px]"
              mt="sm"
              type="number"
              placeholder="Enter your phone number"
              {...form.getInputProps('phoneNumber')}
            />

            <Button
              className="select-none w-[100%] bg-yellow-400 hover:bg-yellow-600 hover:text-white px-6 py-1 rounded mb-5"
              type="submit"
              mt="sm"
            >
              Generate OTP
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OtpReq
