import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { IComment, IProduct, IUser, IVehicles } from "../types";
import useServices from "../services/useServices";

interface IAppContext {
  users: IUser[];
  products: IProduct[];
  comments: IComment[];
  vehicles: IVehicles[];
  activeHref: string;
  getData: string;
  loading?: boolean;
  setUsersDetails: (users: IUser[]) => void;
  setProductDetails: (products: IProduct[]) => void;
  setCommentsDetails: (comments: IComment[]) => void;
  setVehiclesDetails: (vehicles: IVehicles[]) => void;
  setActiveHrefDetails: (url: string) => void;
  setDataDetails: (value: string) => void;
}

interface IAppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<IAppContext>({
  users: [],
  products: [],
  comments: [],
  vehicles: [],
  activeHref: "",
  getData: "",
  loading: false,
  setUsersDetails: () => {},
  setProductDetails: () => {},
  setCommentsDetails: () => {},
  setVehiclesDetails: () => {},
  setActiveHrefDetails: () => {},
  setDataDetails: () => {},
});

const AppContextProvider: React.FC<IAppContextProviderProps> = ({
  children,
}) => {
  const { generateComments, generateProducts, generateUser, generateVehicles } =
    useServices();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [vehicles, setVehicles] = useState<IVehicles[]>([]);
  const [activeHref, setActiveHref] = useState("/");
  const [getData, setData] = useState("");

  const genrateInfo = useCallback(async (value: string) => {
    if (value === "users") {
      const newUsers = await generateUser();
      setUsers([...users, ...newUsers]);
    } else if (value === "products") {
      const newProducts = await generateProducts();
      setProducts([...products, ...newProducts]);
    } else if (value === "comments") {
      const newComments = await generateComments();
      setComments([...comments, ...newComments]);
    } else if (value === "vehicles") {
      const newVehicles = await generateVehicles();
      setVehicles([...vehicles, ...newVehicles]);
    }
    setData("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    genrateInfo(getData);
  }, [genrateInfo, getData]);

  const setProductDetails = (product: IProduct[]) => {
    setProducts([...products, ...product]);
  };

  const setCommentsDetails = (comment: IComment[]) => {
    setComments([...comments, ...comment]);
  };

  const setVehiclesDetails = (vehicle: IVehicles[]) => {
    setVehicles([...vehicles, ...vehicle]);
  };

  const setUsersDetails = (data: IUser[]) => setUsers(data);

  const setActiveHrefDetails = (url: string) => setActiveHref(url);

  const setDataDetails = (value: string) => setData(value);

  const data = {
    users,
    products,
    comments,
    vehicles,
    activeHref,
    getData,
    setProductDetails,
    setUsersDetails,
    setCommentsDetails,
    setVehiclesDetails,
    setActiveHrefDetails,
    setDataDetails,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

const useAppProvider = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(
      "useAppProvider can only be used inside AppContextProvider"
    );
  }
  return context;
};

export { AppContextProvider, useAppProvider };
