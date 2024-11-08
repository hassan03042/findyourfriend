import { getUsers } from "@/actions/users";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const users = [
  {
    fullname: "Bilal Raza",
    email: "attari1235@gmail.com",
    location: "Karachi",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwwÇ",
    events: 5,
  },
  {
    fullname: "Ahmed Raza",
    email: "raza@gmail.com",
    location: "Karachi",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwwÇ",
    events: 5,
  },
  {
    fullname: "Asad Raza",
    email: "asad@gmail.com",
    location: "Karachi",
    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwwÇ",
    events: 5,
  },
];

export default async function Users() {
  const users = await getUsers();
  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Users</h1>
      </div>
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Profile Image</TableHead>
            <TableHead className="w-[100px]">Fullname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Events</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.users?.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="text-right">
                <Avatar>
                  <AvatarImage height={40} width={40} src={user.profileImg} />
                  <AvatarFallback>-</AvatarFallback>
                </Avatar>
                {/* <Image
                  src={user.profileImage}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                /> */}
              </TableCell>
              <TableCell className="font-medium">{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>{user.events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
