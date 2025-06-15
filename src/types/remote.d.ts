import { User } from "../store/types";
import { AppDispatch } from "../store/store";

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
    dispatch: AppDispatch;
  }

  const RemoteApp: React.FC<RemoteAppProps>;
  export default RemoteApp;
}
