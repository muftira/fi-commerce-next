import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function SignUpForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState({
    profilePicture:'',
    fullName: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
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
    
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageProfile(imageUrl);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Your Account</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fullName">Profile Picture</Label>
              <div className="flex justify-center items-center">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={imageProfile} alt="ImageProfile" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
              </div>
              <div className='relative'>
              <Input
                  className="flex justify-center cursor-pointer absolute z-10 opacity-0 w-[120px]"
                  id="name"
                  placeholder="Your Avatar"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <div className='flex justify-between gap-2'>
                <Button  onClick={handleClick}>{imageProfile ? 'Change Picture' : 'Upload Picture'}</Button>
                <Button variant="outline" className='text-red-600 hover:text-red-300' onClick={handleRemove}>Delete Picture</Button>
                </div>
                
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Your email" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Your password" type="password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Your address" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Your phone number" type="number" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button>Create Account</Button>
      </CardFooter>
    </Card>
  );
}
