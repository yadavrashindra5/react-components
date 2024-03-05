import RootTable from "../../components/Table/table";
import { planetData } from "./TableData";

export default function TableSection() {
  const { planetary_system } = planetData;
  const { terrestrial_planets } = planetary_system;

  const columns = Object.keys(terrestrial_planets[0]);
  let rows = Object.keys(planetary_system);
  rows = rows.slice(1);

  // deep copy of planetary_system
  let copyOfPlanetarySystem: any = JSON.parse(JSON.stringify(planetary_system));

  delete copyOfPlanetarySystem.caption;

  return (
    <div style={{ overflow: "scroll" }}>
      <RootTable caption={planetary_system.caption}>
        <RootTable.TableColGroup>
          <RootTable.TableCol hasValue={true} hasStyle={false} value={2} />
          <RootTable.TableCol
            hasValue={false}
            hasStyle={true}
            style={{ border: "0.2rem solid #000" }}
          />
          <RootTable.TableCol hasValue={true} hasStyle={false} value={9} />
        </RootTable.TableColGroup>
        <RootTable.TableHead>
          <RootTable.TableRow>
            <RootTable.TableBodyData isTableHeading={true} colspan={2} />
            {columns.map((val, ind) => (
              <RootTable.TableBodyData
                key={ind}
                isTableHeading={true}
                scope="col"
                tableHeading={val.split("_").join(" ")}
              />
            ))}
          </RootTable.TableRow>
        </RootTable.TableHead>
        <RootTable.TableBody>
          {Object.keys(copyOfPlanetarySystem).map((value) => {
            return Array.isArray(copyOfPlanetarySystem[value])
              ? copyOfPlanetarySystem[value].map((sv: any, si: number) => {
                  return (
                    <RootTable.TableRow>
                      {(si === 0 && (
                        <>
                          <RootTable.TableBodyData
                            isTableHeading={true}
                            colspan={2}
                            rowspan={4}
                            tableHeading={value.split("_").join(" ")}
                          />
                          {Object.keys(sv).map((svVal, svInd) => {
                            return (
                              <>
                                {(svInd === 0 && (
                                  <RootTable.TableBodyData
                                    isTableHeading={true}
                                    tableHeading={sv[svVal]}
                                  />
                                )) || (
                                  <RootTable.TableBodyData
                                    isTableHeading={false}
                                    tableHeading={sv[svVal]}
                                  />
                                )}
                              </>
                            );
                          })}
                        </>
                      )) ||
                        Object.keys(sv).map((svVal, svInd) => {
                          return (
                            <>
                              {(svInd === 0 && (
                                <RootTable.TableBodyData
                                  isTableHeading={true}
                                  tableHeading={sv[svVal]}
                                />
                              )) || (
                                <RootTable.TableBodyData
                                  isTableHeading={false}
                                  tableHeading={sv[svVal]}
                                />
                              )}
                            </>
                          );
                        })}
                    </RootTable.TableRow>
                  );
                })
              : Object.keys(copyOfPlanetarySystem[value]).map((val, ind) => {
                  return (
                    <>
                      {(ind === 0 && (
                        <>
                          {copyOfPlanetarySystem[value][val].map(
                            (v: any, i: number) => {
                              return (
                                <RootTable.TableRow>
                                  {(i === 0 && (
                                    <>
                                      {ind === 0 && (
                                        <RootTable.TableBodyData
                                          isTableHeading={true}
                                          colspan={1}
                                          rowspan={4}
                                          tableHeading={value
                                            .split("_")
                                            .join(" ")}
                                        />
                                      )}
                                      <RootTable.TableBodyData
                                        isTableHeading={true}
                                        colspan={1}
                                        rowspan={2}
                                        tableHeading={val.split("_").join(" ")}
                                      />
                                      {Object.keys(v).map(
                                        (someVal, someInd) => {
                                          return (
                                            <>
                                              {(someInd === 0 && (
                                                <RootTable.TableBodyData
                                                  isTableHeading={true}
                                                  tableHeading={v[someVal]}
                                                />
                                              )) || (
                                                <RootTable.TableBodyData
                                                  isTableHeading={false}
                                                  tableHeading={v[someVal]}
                                                />
                                              )}
                                            </>
                                          );
                                        }
                                      )}
                                    </>
                                  )) ||
                                    Object.keys(v).map((someVal, someInd) => {
                                      return (
                                        <>
                                          {(someInd === 0 && (
                                            <RootTable.TableBodyData
                                              isTableHeading={true}
                                              tableHeading={v[someVal]}
                                            />
                                          )) || (
                                            <RootTable.TableBodyData
                                              isTableHeading={false}
                                              tableHeading={v[someVal]}
                                            />
                                          )}
                                        </>
                                      );
                                    })}
                                </RootTable.TableRow>
                              );
                            }
                          )}
                        </>
                      )) ||
                        copyOfPlanetarySystem[value][val].map(
                          (v: any, i: number) => {
                            return (
                              <RootTable.TableRow>
                                {(i === 0 && (
                                  <>
                                    <RootTable.TableBodyData
                                      isTableHeading={true}
                                      colspan={1}
                                      rowspan={2}
                                      tableHeading={val.split("_").join(" ")}
                                    />
                                    {Object.keys(v).map((someVal, someInd) => {
                                      return (
                                        <>
                                          {(someInd === 0 && (
                                            <RootTable.TableBodyData
                                              isTableHeading={true}
                                              tableHeading={v[someVal]}
                                            />
                                          )) || (
                                            <RootTable.TableBodyData
                                              isTableHeading={false}
                                              tableHeading={v[someVal]}
                                            />
                                          )}
                                        </>
                                      );
                                    })}
                                  </>
                                )) ||
                                  Object.keys(v).map((someVal, someInd) => {
                                    return (
                                      <>
                                        {(someInd === 0 && (
                                          <RootTable.TableBodyData
                                            isTableHeading={true}
                                            tableHeading={v[someVal]}
                                          />
                                        )) || (
                                          <RootTable.TableBodyData
                                            isTableHeading={false}
                                            tableHeading={v[someVal]}
                                          />
                                        )}
                                      </>
                                    );
                                  })}
                              </RootTable.TableRow>
                            );
                          }
                        )}
                    </>
                  );
                });
          })}
        </RootTable.TableBody>
      </RootTable>
    </div>
  );
}
