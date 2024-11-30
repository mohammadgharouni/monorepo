import { route } from "react-route-type";

const DentoRoutes = route("dento").createNestedRoutes((dento) => ({
  dento,
  login: dento.route(["login"]),
  register: dento.route(["register"]),
  //   justForPagination: route("", { query: { page: "" } }),
  //   dates: dento.route(["dates", ":reportId"]),
  //   newReport: dento.route(["newReport", ":reportId"], {
  //     query: { selected: "" },
  //   }),
  //   dataSource: dento.route(["dataSource", ":reportId"], {
  //     query: { selected: "" },
  //   }),
  //   viewer: dento.route(["viewer", ":reportId"], {
  //     query: { utm_source: "" },
  //   }),
  //   designer: dento.route(["designer", ":reportId"], {
  //     query: { designer: "" },
  //   }),
  //   activeBuilder: dento.route(["activebuilder", ":reportId"], {
  //     query: {
  //       reportDataSourceId: "",
  //     },
  //   }),
  //   systemDataSources: dento.route(["systemdatasources"], {
  //     query: {
  //       reportDataSourceId: "",
  //     },
  //   }),
}));

export { DentoRoutes };
