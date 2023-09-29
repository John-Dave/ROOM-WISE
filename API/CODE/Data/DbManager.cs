using System;
using System.Data;
using MySql.Data.MySqlClient;
using System.Configuration;


namespace WebApiTest.Data
{


    /// <summary>
    /// Implements database routines
    /// Author: Sultan Mehmood
    /// Date: 06/19/2010
    /// </summary>
    public class DbManager : IDisposable
    {
        public static DbManager GetDbManager()
        {   //server=172.21.0.1;userid=root;password=password;database=webapidbtest;charset=utf8;SslMode=none;port=3306;
            return new DbManager( "server="+Environment.GetEnvironmentVariable("DB_SERVER")+";userid="+Environment.GetEnvironmentVariable("DB_USERNAME")+";password="+Environment.GetEnvironmentVariable("DB_PASSWORD")+";database="+Environment.GetEnvironmentVariable("DB_NAME")+";charset=utf8;SslMode="+Environment.GetEnvironmentVariable("DB_SSL_MODE")+";port="+Environment.GetEnvironmentVariable("DB_PORT")+";");
        }

        public static DbManager GetDbManager(bool switchToProviderPortalDB)
        {
           return new DbManager("server="+Environment.GetEnvironmentVariable("DB_SERVER")+";userid="+Environment.GetEnvironmentVariable("DB_USERNAME")+";password="+Environment.GetEnvironmentVariable("DB_PASSWORD")+";database="+Environment.GetEnvironmentVariable("DB_NAME")+";charset=utf8;SslMode="+Environment.GetEnvironmentVariable("DB_SSL_MODE")+";port="+Environment.GetEnvironmentVariable("DB_PORT")+";");
        }

        #region Member variables

        private MySqlConnection cn;
        private string parameters;
        private string connectionString;
        private string procName;
        private bool _disposed = false;

        #endregion

        #region Properties
        public virtual bool Disposed
        {
            get
            {
                return _disposed;
            }
            set
            {
                _disposed = value;
            }
        }

        public string ProcName
        {
            get { return procName; }
            set { procName = value; }
        }

        #endregion

        #region Constructor of Data Handler

        public DbManager(string dbConnectionString)
        {
            this.connectionString = dbConnectionString;
        }

        public DbManager(string dbConnectionString, string storedProcedureName)
        {
            procName = storedProcedureName;
            this.connectionString = dbConnectionString;
        }

        #endregion

        #region GetDataSet(string Name)

        /// <summary>
        /// Make input param.
        /// Create a data set object
        /// <param name="name">Name of table, with which we want to create data set </param>
        /// <returns>Data set object </returns>

        public DataSet GetDataSet(string name)
        {
            try
            {
                Open();
                MySqlDataAdapter adapter = new MySqlDataAdapter(name + " " + parameters, cn);
                DataSet dataset = new DataSet(name);
                adapter.Fill(dataset);

                return dataset;
            }
            finally
            {
                Close();
            }

        }
        #endregion

        #region GetDataSet()
        /// <summary>
        /// Create a data set object
        /// <param name="name">Name of table, with which we want to create data set </param>
        /// <returns>Data set object </returns>
        public DataSet GetDataSet()
        {
            try
            {
                if (procName == "")
                    throw new Exception("Procedure name must be set.");
                Open();
                MySqlDataAdapter adapter = new MySqlDataAdapter(procName + " " + parameters, cn);
                DataSet dataset = new DataSet();
                adapter.Fill(dataset);

                return dataset;
            }
            finally
            {
                Close();
            }

        }
        #endregion

        #region FillDataSet(DataSet)
        public DataSet FillDataSet(DataSet dataset)
        {
            try
            {
                Open();
                MySqlDataAdapter adapter = new MySqlDataAdapter(procName + " " + parameters, cn);
                adapter.Fill(dataset);

                return dataset;
            }
            finally
            {
                Close();
            }
        }
        #endregion

        #region GetDataSet(string Name,int startRow,int maxRow)
        /// <summary>
        /// Create a data set object containing specified no. of records
        /// <param name="name">Name of table, with which we want to create data set </param>
        /// <param name="startRow">Start row, of data set</param>
        /// <param name="maxRecords">Maximum no of records to be returned in data set</param>
        /// <returns>Data set object </returns>

        public DataSet GetDataSet(string name, int startRow, int maxRecords)
        {
            try
            {
                if (procName == "")
                    throw new Exception("Procedure name must be set.");

                Open();
                MySqlDataAdapter adapter = new MySqlDataAdapter(procName + " " + parameters, cn);
                DataSet dataset = new DataSet(name);
                adapter.Fill(dataset, startRow, maxRecords, name);

                return dataset;
            }
            finally
            {
                Close();
            }

        }
        #endregion

        #region GetDataView(string Name,int startRow,int maxRow)
        /// <summary>
        /// Create a data view object containing specified no of records
        /// <param name="name">Name of table, with which we want to create data set </param>
        /// <param name="startRow">Start row, of data set</param>
        /// <param name="maxRecords">Maximum no of records to be returned in data set</param>
        /// <returns>Data set object </returns>


        public DataView GetDataView(string name, int startRow, int maxRecords)
        {
            try
            {
                if (procName == "")
                    throw new Exception("Procedure name must be set.");
                Open();
                MySqlDataAdapter adapter = new MySqlDataAdapter(procName + " " + parameters, cn);
                DataSet dataset = new DataSet(name);
                adapter.Fill(dataset, startRow, maxRecords, name);
                return dataset.Tables[0].DefaultView;
            }
            finally
            {
                Close();
            }

        }
        #endregion

        #region GetDataView
        /// <summary>
        /// Create a data set object
        /// <param name="name">Name of table, with which we want to create data set </param>
        /// <returns>Data set object </returns>

        public DataView GetDataView(string name)
        {
            try
            {
                if (procName == "")
                    throw new Exception("Procedure name must be set.");
                Open();
                MySqlDataAdapter adapter = new MySqlDataAdapter(procName + " " + parameters, cn);
                DataSet dataset = new DataSet(name);
                adapter.Fill(dataset, name);
                return dataset.Tables[0].DefaultView;
            }
            finally
            {
                Close();
            }

        }
        #endregion

        #region GetDataReader
        /// <summary>
        /// Create a data reader object
        /// <returns>Data set object </returns>

        public MySqlDataReader GetDataReader()
        {
            if (procName == "")
                throw new Exception("Procedure name must be set.");
            Open();
            MySqlCommand cmd = new MySqlCommand(procName + " " + parameters, cn);
            MySqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            return reader;
        }
        #endregion

        #region ExecuteScalar
        /// <summary>
        /// Execute procedure and returns single value returned by it.
        /// <returns> int containing value returned by user. </returns>
        ///  <summary>
        public int ExecuteScalar()
        {
            try
            {
                if (procName == "")
                    throw new Exception("Procedure name must be set.");
                Open();
                int result;
                MySqlCommand cmd = new MySqlCommand(procName + " " + parameters, cn);
                result = (int)cmd.ExecuteScalar();
                return result;
            }
            finally
            {
                Close();
            }
        }
        #endregion

        #region AddParameter(string Name,Object Data)
        /// Add Parameter
        /// <param name="name">Name of parameter </param>
        /// <returns>Value of parameter</returns>


        public void AddParameter(string name, Object data)
        {
            parameters = parameters + name + "=" + data;
        }
        #endregion

        #region RunProcedure(string name)
        /// <summary>
        /// Run stored procedure.
        /// </summary>
        /// <param name="procName">Name of stored procedure.</param>
        /// <param name="prams">Stored procedure params.</param>
        /// <returns>Stored procedure return value.</returns>

        public int RunProc(string procName)
        {
            try
            {
                MySqlCommand cmd = CreateCommand(procName, null);
                cmd.ExecuteNonQuery();
                return (int)cmd.Parameters["ReturnValue"].Value;
            }
            finally
            {
                Close();
            }

        }
        #endregion


        #region GetDataSet(string procName, SqlParams[])
        public DataSet GetDataSet(string procName, MySqlParameter[] prams)
        {
            try
            {
                MySqlCommand cmd = CreateCommand(procName, prams);
                //if someone finds out this in the code below "cmd.CommandTimeout = 1000;".
                //changed for testing
                cmd.CommandTimeout = 1000;
                MySqlDataAdapter adapter = new MySqlDataAdapter(cmd);
                DataSet dataset = new DataSet();
                adapter.Fill(dataset);

                return dataset;
            }
            finally
            {
                Close();
            }
        }
        #endregion

        #region GetScalarValue(string procName, SqlParams[])
        /// <summary>
        /// Added by Sultan Mehmood
        /// Description: To Get Scalar Value from DataBase
        /// </summary>
        /// <param name="procName"></param>
        /// <param name="prams"></param>
        /// <returns></returns>

        public object GetScalarValue(string procName, MySqlParameter[] prams)
        {
            object result;
            try
            {
                if (procName == "")
                    throw new Exception("Procedure name must be set.");
                Open();
                MySqlCommand cmd = CreateCommand(procName, prams);
                object value = cmd.ExecuteScalar();


                result = value;

                return result;
            }
            finally
            {
                Close();
            }
        }
        #endregion

        #region RunProcedure(string name, SqlParam[])
        /// <summary>
        /// Run stored procedure.
        /// </summary>
        /// <param name="procName">Name of stored procedure.</param>
        /// <param name="prams">Stored procedure params.</param>
        /// <returns>Stored procedure return value.</returns>

        public int RunProc(string procName, MySqlParameter[] prams)
        {
            try
            {
                MySqlCommand cmd = CreateCommand(procName, prams);
                return cmd.ExecuteNonQuery();

            }
            finally
            {
                Close();
            }
        }



        #endregion

        #region RunProcedure(string name, TimeSpan timeout, SqlParam[])
        /// <summary>
        /// Run stored procedure.
        /// </summary>
        /// <param name="procName">Name of stored procedure.</param>
        /// <param name="prams">Stored procedure params.</param>
        /// <returns>Stored procedure return value.</returns>

        public long RunProc(string procName, int timeout, MySqlParameter[] prams)
        {
            try
            {
                MySqlCommand cmd = CreateCommand(procName, prams);
                cmd.CommandTimeout = timeout;
                cmd.ExecuteNonQuery();
                if (cmd.LastInsertedId != null)
                    return (long)cmd.LastInsertedId;
                else
                    return 0;
            }
            finally
            {
                Close();
            }
        }

        #endregion

        #region RunProcedure(string name, SqlParams[], bool close)
        public long RunProc(string procName, MySqlParameter[] prams, bool mustClose)
        {
            try
            {
                MySqlCommand cmd = CreateCommand(procName, prams);
                cmd.ExecuteNonQuery();
                if (cmd.LastInsertedId != null)
                    return (long)cmd.LastInsertedId;
                else
                    return 0;
            }
            finally
            {
                if (mustClose == true)
                    Close();
            }
        }
        #endregion

        #region RunProcedure(string name, SqlParams[], out int records)
        /// <summary>
        /// Run stored procedure.
        /// </summary>
        /// <param name="procName">Name of stored procedure.</param>
        /// <param name="prams">Stored procedure params.</param>
        /// <returns>Stored procedure return value.</returns>

        public long RunProc(string procName, MySqlParameter[] prams, out int recordsAffected)
        {
            try
            {
                MySqlCommand cmd = CreateCommand(procName, prams);
                recordsAffected = cmd.ExecuteNonQuery();
                if (cmd.LastInsertedId != null)
                    return (long)cmd.LastInsertedId;
                else
                    return 0;
            }
            finally
            {
                Close();
            }
        }
        #endregion

        #region GetDataReader(string procName, SqlParameter[] prams )
        /// <summary>
        /// Run stored procedure.
        /// </summary>
        /// <param name="procName">Name of stored procedure.</param>
        /// <param name="dataReader">Return result of procedure.</param>
        public MySqlDataReader GetDataReader(string procName, params MySqlParameter[] prams)
        {

            MySqlCommand cmd = CreateCommand(procName, prams);
            return cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
        }
        #endregion

        #region GetDataReader(string procName, CommandType type, SqlParameter[] prams )
        /// <summary>
        /// Run stored procedure.
        /// </summary>
        /// <param name="procName">Name of stored procedure.</param>
        /// <param name="dataReader">Return result of procedure.</param>
        public MySqlDataReader GetDataReader(string procName, CommandType type, params MySqlParameter[] prams)
        {

            MySqlCommand cmd = CreateCommand(procName, prams);
            cmd.CommandType = type;
            return cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
        }
        #endregion

        #region GetDataReader(string procName, CommandType type, CommandBehavior cmdBehavior, SqlParameter[] prams )
        /// <summary>
        /// Run stored procedure.
        /// </summary>
        /// <param name="procName">Name of stored procedure.</param>
        /// <param name="dataReader">Return result of procedure.</param>
        public MySqlDataReader GetDataReader(string procName, CommandType type, CommandBehavior cmdBehavior, params MySqlParameter[] prams)
        {

            MySqlCommand cmd = CreateCommand(procName, prams);
            cmd.CommandType = type;
            return cmd.ExecuteReader(cmdBehavior);
        }
        #endregion

        #region GetDataReader(string procName)
        public MySqlDataReader GetDataReader(string procName)
        {

            MySqlCommand cmd = CreateCommand(procName, null);
            return cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
        }
        #endregion

        #region RunProc(string procName, out MySqlDataReader dataReader)
        /// <summary>
        /// Run stored procedure.
        /// </summary>
        /// <param name="procName">Name of stored procedure.</param>
        /// <param name="dataReader">Return result of procedure.</param>
        public void RunProc(string procName, out MySqlDataReader dataReader)
        {

            MySqlCommand cmd = CreateCommand(procName, null);
            dataReader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
        }
        #endregion

        #region RunProc(string procName, SqlParameter[] prams, out MyMyMySqlDataReader dataReader)
        /// <summary>
        /// Run stored procedure.
        /// </summary>
        /// <param name="procName">Name of stored procedure.</param>
        /// <param name="prams">Stored procedure params.</param>
        /// <param name="dataReader">Return result of procedure.</param>
        public void RunProc(string procName, MySqlParameter[] prams, out MySqlDataReader dataReader)
        {

            MySqlCommand cmd = CreateCommand(procName, prams);
            dataReader = cmd.ExecuteReader(System.Data.CommandBehavior.CloseConnection);
        }
        #endregion

        #region CreateCommand(string procName, SqlParameter[] prams)
        /// <summary>
        /// Create command object used to call stored procedure.
        /// </summary>
        /// <param name="procName">Name of stored procedure.</param>
        /// <param name="prams">Params to stored procedure.</param>
        /// <returns>Command object.</returns>
        private MySqlCommand CreateCommand(string procName, MySqlParameter[] prams)
        {
            Open();
            MySqlCommand cmd = new MySqlCommand(procName, cn);
            if (cmd.Parameters.Count > 0)
                cmd.Parameters.Clear();
            cmd.CommandType = CommandType.StoredProcedure;

            if (prams != null)
            {
                foreach (MySqlParameter parameter in prams)
                    cmd.Parameters.Add(parameter);
            }

            //cmd.Parameters.Add(
              //  new MySqlParameter("ReturnValue", MySqlDbType.Int32, 4,
              //  ParameterDirection.ReturnValue, false, 0, 0,
               // string.Empty, DataRowVersion.Default, null));

            return cmd;
        }
        #endregion

        #region Open the connection.
        /// <summary>
        /// Open the connection.
        /// </summary>
        private void Open()
        {
            // open connection
            try{
            if (cn == null)
            {
                cn = new MySqlConnection(this.connectionString);
                cn.Open();

            }
            }
            catch(Exception ex){
                System.Console.WriteLine("OPEN ###  "+ex.Message);
            }
        }
        #endregion

        #region Close the connection.
        /// <summary>
        /// Close the connection.
        /// </summary>
        public void Close()
        {
            if (cn != null)
                cn.Close();
        }
        #endregion

        #region Make Input param (paramName, DbType, size, Value)
        /// <summary>
        /// Make input param.
        /// </summary>
        /// <param name="ParamName">Name of param.</param>
        /// <param name="DbType">Param type.</param>
        /// <param name="Size">Param size.</param>
        /// <param name="Value">Param value.</param>
        /// <returns>New parameter.</returns>
        public MySqlParameter MakeInParam(string ParamName, MySqlDbType DbType, int Size, object Value)
        {
            return MakeParam(ParamName, DbType, Size, ParameterDirection.Input, Value);
        }
        #endregion

        #region Make Output Param (param name, DbType, Size)
        /// <summary>
        /// Make input param.
        /// </summary>
        /// <param name="ParamName">Name of param.</param>
        /// <param name="DbType">Param type.</param>
        /// <param name="Size">Param size.</param>
        /// <returns>New parameter.</returns>
        public MySqlParameter MakeOutParam(string ParamName, MySqlDbType DbType, int Size)
        {
            return MakeParam(ParamName, DbType, Size, ParameterDirection.Output, null);
        }
        #endregion

        #region Make InOut Param
        public MySqlParameter MakeInOutParam(string ParamName, MySqlDbType DbType, int Size, object Value)
        {
            return MakeParam(ParamName, DbType, Size, ParameterDirection.InputOutput, Value);
        }
        #endregion

        #region Make Return Param (DbType, Size)
        /// <summary>
        /// Creates a sql return parameter
        /// </summary>
        /// <param name="DbType">Param type.</param>
        /// <param name="Size">Param size.</param>
        /// <returns>New parameter.</returns>
        public MySqlParameter MakeReturnParam(MySqlDbType DbType, int Size)
        {
            return MakeParam("@return_value", DbType, Size, ParameterDirection.ReturnValue, null);
        }
        #endregion

        #region Make stored procedure param.
        /// <summary>
        /// Make stored procedure param.
        /// </summary>
        /// <param name="ParamName">Name of param.</param>
        /// <param name="DbType">Param type.</param>
        /// <param name="Size">Param size.</param>
        /// <param name="Direction">Parm direction.</param>
        /// <param name="Value">Param value.</param>
        /// <returns>New parameter.</returns>
        public MySqlParameter MakeParam(string ParamName, MySqlDbType DbType, Int32 Size, ParameterDirection Direction, object Value)
        {
            MySqlParameter param;

            if (Size > 0)
                param = new MySqlParameter(ParamName, DbType, Size);
            else
                param = new MySqlParameter(ParamName, DbType);

            param.Direction = Direction;
            if (!(Direction == ParameterDirection.Output && Value == null))
                param.Value = Value;

            return param;
        }
        #endregion

        #region Finalization

        public virtual void Dispose()
        {
            Dispose(false);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (Disposed == true)
            {
                return;
            }


            try
            {
                GC.SuppressFinalize(this);

                if (cn != null)
                {
                    cn.Dispose();
                }
                cn = null;

            }
            catch
            {
            }
            finally
            {
                Disposed = true;
            }
        }

        ~DbManager()
        {
            Dispose(true);
        }

        #endregion

    }//EndClass DbManager

}
