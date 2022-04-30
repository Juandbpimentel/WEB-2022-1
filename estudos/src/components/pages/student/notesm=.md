<div>
                    <table className="table table-bordered table-striped table-dark align-middle">
                        <ScrollAreaDemo>
                            <thead>
                                <tr>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Nome</th>
                                    <th className="text-center">Curso</th>
                                    <th className="text-center">IRA</th>
                                    <th colSpan="2" className="text-center">
                                        Ações
                                    </th>
                                </tr>
                            </thead>
                            <tbody>{generateTable()}</tbody>
                        </ScrollAreaDemo>
                    </table>
                </div>