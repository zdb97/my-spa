import { User } from "../store/types";

declare module "remote/RemoteApp" {
  interface RemoteAppProps {
    onNavigate: (path: string) => void;
    users: User[];
    todos: Array<{
      id: number;
      title: string;
      completed: boolean;
      userId: number;
    }>;
    currentUser: User | null;
    onSetCurrentUser: (user: User | null) => void;
  }

  const RemoteApp: React.FC<RemoteAppProps>;
  export default RemoteApp;
}
