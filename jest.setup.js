import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import {server} from "@/mocks/server";

jest.mock("swiper/react", () => ({
  Swiper: ({children}) => <div data-testid="Swiper-testId">{children}</div>,
  SwiperSlide: ({children}) => (
    <div data-testid="SwiperSlide-testId">{children}</div>
  ),
}));
jest.mock("swiper", () => ({
  Navigation: props => null,
  Pagination: props => null,
  Scrollbar: props => null,
  A11y: props => null,
}));

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push : jest.fn()
    };
  },
}));


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
