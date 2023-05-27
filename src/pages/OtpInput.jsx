import { Badge, NumberInput } from '@mantine/core'

const OtpReq = () => {
  return (
    <div className="body flex h-screen items-center justify-center">
      <div className="  flex flex-col  justify-center items-center w-80 bg-blue-600 rounded-lg shadow-xl p-4">
        <h1 className=" text-2xl text-yellow-400 font-semibold my-5 select-none text-center">
          Two-Factor Authentication
        </h1>
        <div className=" flex flex-col gap-4">
          <div className=" flex gap-1 justify-center">
            <NumberInput
              type="number"
              className=" w-8 h-8  "
              placeholder="x"
              hideControls
            />
            <NumberInput
              type="number"
              className=" w-8 h-8"
              placeholder="x"
              hideControls
            />
            <NumberInput
              type="number"
              className=" w-8 h-8"
              placeholder="x"
              hideControls
            />
            <NumberInput
              type="number"
              className=" w-8 h-8"
              placeholder="x"
              hideControls
            />
            <NumberInput
              type="number"
              className=" w-8 h-8"
              placeholder="x"
              hideControls
            />
            <NumberInput
              type="number"
              className=" w-8 h-8"
              placeholder="x"
              hideControls
            />
          </div>
          <div>
            <p className=" text-yellow-400 text-center select-none mb-5">
              A message with a verification code has been sent to your devices.
              <br />
              Enter the code to continue.
            </p>
            <p className=" flex justify-center items-center gap-2  text-gray-400 text-center select-none mb-5">
              Didn,t recieve the OTP?
              <i>
                <Badge
                  className="cursor-pointer bg-gray hover:bg-gray-200 text-yellow-500 hover:text-yellow-700"
                  size="sm"
                  radius=""
                >
                  Resend
                </Badge>
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtpReq
