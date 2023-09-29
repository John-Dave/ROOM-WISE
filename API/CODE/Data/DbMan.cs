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
    public class DbMan : IDisposable
    {
		public DbMan()
        {
            //this.connectionString = dbConnectionString;
            Open();
        }
        
        private MySqlConnection cn;
        private string parameters;
        private string connectionString="server=18.218.74.150;userid=root;password=password;database=webapidb;charset=utf8;SslMode=none;port=3306;";
        private string procName;
        void IDisposable.Dispose()
        {

        }
         public DataSet GetDataSet()
        {
            try
            {
                this.cn=new MySqlConnection(connectionString);       
                MySqlCommand cmd = new MySqlCommand("Login_GetLoginDetails",cn);
                cmd.Parameters.AddWithValue("@ppassword_", "1admin");
                cmd.Parameters.AddWithValue("@partnerID_", "9897232006");
                //if someone finds out this in the code below "cmd.CommandTimeout = 1000;".
                //changed for testing
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandTimeout = 1000;
                                cn.Open();
                MySqlDataAdapter adapter = new MySqlDataAdapter(cmd);
                DataSet dataset = new DataSet();
                adapter.Fill(dataset);

                return dataset;
            }
            finally
            {
                cn.Close();
            }
        }
        
         public DataSet GetDataSet(string procName, MySqlParameter[] prams)
        {
            try
            {
                MySqlCommand cmd = CreateCommand(procName, prams);
                //if someone finds out this in the code below "cmd.CommandTimeout = 1000;".
                //changed for testing
                //cmd.CommandTimeout = 1000;
                //cmd.CommandType = CommandType.StoredProcedure;
                Open();
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

            cmd.Parameters.Add(
                new MySqlParameter("ReturnValue", MySqlDbType.Int32, 4,
                ParameterDirection.ReturnValue, false, 0, 0,
                string.Empty, DataRowVersion.Default, null));

            return cmd;
        }
        
        private void Open()
        {
            // open connection

            if (cn == null)
            {
                cn = new MySqlConnection(this.connectionString);
                cn.Open();

            }
        }
        public void Close()
        {
            if (cn != null)
                cn.Close();
        }
        
        public MySqlParameter MakeInParam(string ParamName, MySqlDbType DbType, int Size, object Value)
        {
            return MakeParam(ParamName, DbType, Size, ParameterDirection.Input, Value);
        }
        public MySqlParameter MakeOutParam(string ParamName, MySqlDbType DbType, int Size)
        {
            return MakeParam(ParamName, DbType, Size, ParameterDirection.Output, null);
        }
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
        
        //END

    }
}

