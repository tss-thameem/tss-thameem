import React,{Component} from 'react'

class DemoTable extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr><th>
                        Name</th>
                    <th>Job</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            thameem ansari
                        </td>
                        <td>Software engineer</td>
                    </tr>
                    <tr>
                        <td>
                            Asif
                        </td>
                        <td>Shop owner</td>
                    </tr>
                    <tr>
                        <td>
                            jabeer
                        </td>
                        <td>Technician</td>
                    </tr>
                    <tr>
                        <td>
                            siddique
                        </td>
                        <td>Python Developer</td>
                    </tr>
                    <tr>
                        <td>
                            mubarak
                        </td>
                        <td>Html Developer</td>
             <tr></tr>
                        <td>
                            karthik
                        </td>
                        <td>Android Developer</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default DemoTable
