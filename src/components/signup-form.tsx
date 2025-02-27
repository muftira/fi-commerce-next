import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PasswordHide } from '@/types';

// components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// icons
import { BiShowAlt, BiSolidHide } from 'react-icons/bi';

export function SignUpForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState({
    profilePicture: '',
    fullName: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
  });
  const [hidePassword, setHidePassword] = useState<PasswordHide>({
    password: false,
    confirmPassword: false,
  });

  const [imageProfile, setImageProfile] = useState<string>('');
  const router = useRouter();

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };
  const handleRemove = () => {
    setImageProfile('');
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files?.[0]);

    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageProfile(imageUrl);
    }
  };

  return (
    <Card className="w-[700px] h-[640px]">
      <CardHeader className="text-center">
        <CardTitle>Create Your Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-flow-col grid-rows-2 w-full items-center gap-4">
            <div className="flex flex-col h-[478px] justify-between space-y-1.5 row-span-6">
              <Label htmlFor="fullName">Profile Picture</Label>
              <div className="flex justify-center items-center">
                <Avatar className="w-[300px] h-[300px]">
                  <AvatarImage src={imageProfile} alt="ImageProfile" />
                  <AvatarFallback className="text-4xl">PP</AvatarFallback>
                </Avatar>
              </div>
              <div className="relative cursor-pointer">
                <Input
                  className="flex justify-center cursor-pointer absolute z-10 opacity-0 w-[120px]"
                  id="name"
                  placeholder="Your Avatar"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <div className="flex justify-between gap-2">
                  <Button className="cursor-pointer w-[120px]" onClick={handleClick}>
                    {imageProfile ? 'Change Picture' : 'Upload Picture'}
                  </Button>
                  <Button
                    variant="outline"
                    className="text-red-600 hover:text-red-300 cursor-pointer w-[120px]"
                    onClick={handleRemove}
                  >
                    Delete Picture
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 col-span-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="flex flex-col space-y-1.5 col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Your email" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5 col-span-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  placeholder="Your password"
                  type={hidePassword.password ? 'text' : 'password'}
                />
                {!hidePassword.password ? (
                  <BiShowAlt
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() =>
                      setHidePassword((prev) => ({ ...prev, password: !prev.password }))
                    }
                  />
                ) : (
                  <BiSolidHide
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() =>
                      setHidePassword((prev) => ({ ...prev, password: !prev.password }))
                    }
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 col-span-2">
              <Label htmlFor="password">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirm password"
                  placeholder="Your password"
                  type={hidePassword.confirmPassword ? 'text' : 'password'}
                />
                {!hidePassword.confirmPassword ? (
                  <BiShowAlt
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() =>
                      setHidePassword((prev) => ({
                        ...prev,
                        confirmPassword: !prev.confirmPassword,
                      }))
                    }
                  />
                ) : (
                  <BiSolidHide
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() =>
                      setHidePassword((prev) => ({
                        ...prev,
                        confirmPassword: !prev.confirmPassword,
                      }))
                    }
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 col-span-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Your phone number" type="number" />
            </div>
            <div className="flex flex-col space-y-1.5 col-span-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Your address" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-[120px]" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button className="w-[120px] cursor-pointer" disabled={true}>
          Create Account
        </Button>
      </CardFooter>
    </Card>
  );
}
