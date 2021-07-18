<style>
    @import '../assets/css/style.css';
</style>
<template>
  <div class="board">
    <div class="header_action">
      <button type="button" class="btn mar_right_10 text-center" @click="addColumn">ADD COLUMN</button>
      <button type="button" class="btn btn-md btn-primary2 text-center mar_right_10"  @click="addCard">ADD TASK CARD </button>
      <button type="button" class="button btn mar_right_10" value="export db" @click="exportDb">Export DB</button>
    </div>
    <div class="column_list">
      <div class="list" v-for="column in listColumns" :key="column.id">
        
          <h3 class="listname column_header"><span>{{ column.column_name }}</span> <button class="btn delete-column" type="button" id="delete-board" @click="deleteColumn(column.id)">Delete</button></h3>
        
          
          
          <draggable class="list-group kanban-column" v-bind:id="'column_id_'+column.id" :list="column.tasks" group="tasks"  @change="update(column.id)">
              <div class="list-group-item card" @click="editTask(task.id)" v-bind:id="task.id" v-for="task in column.tasks" :key="task.id">
                {{ task.title }}
              </div>
          </draggable>
      </div>
    </div>
    
    <div class="add_column">
      <modal name="add_column_modal">
        <h4 class="modal-title">Add Column</h4>
        <div class="modal-body">
          <div class="column_raw">
            <label>Column name</label>
            <input type="text" name="column_name" value="" v-model="column_name">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="button btn mar_right_10" value="Save" @click="saveColumnName">Save</button>
          <button type="button" class="button btn" value="Discard" @click="cancelColumnName">Discard</button>
          
        </div>
      </modal>
    </div>
    <div class="add_card">
      <modal name="add_card_modal" >
        <h4 class="modal-title">Add Card</h4>
        <div class="modal-body">
          <input type="hidden" name="card_id" v-model="card_id"/>

          <div class="card_raw">
            <label>Card title</label>
            <input type="text" name="card_title" value="" v-model="card_title">
          </div>
          <div class="card_raw">
            <label>column</label>
            <select v-model="card_column_id">
              <option disabled value="">Please select one</option>
              <option v-for="column in listColumns" :key="column.id" v-bind:value="column.id">{{ column.column_name }}</option>
            </select>
          </div>
          
          <div class="card_raw">
            <label>card description</label>
            <textarea v-model="card_description" placeholder="add multiple lines"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="button btn mar_right_10" value="Save" @click="saveCard">Save</button>
          <button type="button" class="button btn" value="Discard" @click="cancelCard">Discard</button>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;
import draggable from 'vuedraggable'
const apiUrl = "http://127.0.0.1:8000/";
export default {
  name: 'column',
  components: {
        draggable,
    },
  data () 
    {
      return {
          listColumns:[],
          column_name:'',
          card_title:'',
          card_description:'',
          card_column_id:'',
          taskId:'',
          card_id:'',
      }
    },
  created(){
    axios.post(apiUrl+'listallcolumn')
    .then(response => {
            // handle success
            if(response.data.code == 200)
            {   
                this.listColumns=response.data.data;
            }
            
    })
    .catch(function (error) {
            // handle error
        console.log(error);
    })
    .then(function () {
            // always executed
    });
  },
  mounted () {
    
  },
   methods: {
        addCard()
        {
            this.$modal.show('add_card_modal');
        },
        cancelCard()
        {
          this.$modal.hide('add_card_modal');
        },
        addColumn(){
          this.$modal.show('add_column_modal');
        },
        cancelColumnName () {
            this.$modal.hide('add_column_modal');
        },
        saveColumnName(){
          if(this.column_name!='')
          {
            let postData = JSON.stringify({"column_name":this.column_name});
              axios.post(apiUrl+'addcolumn',postData)
              .then(response => {
                if(response.data.code == 200)
                {
                    this.listColumns.push(response.data.data);
                }
                      
              })
              .catch(function (error) {
                      // handle error
                  console.log(error);
              })
              .then(function () {
                      // always executed
              });
              this.cancelColumnName();
              this.column_name = '';
          }
          else
          {
            alert("Please enter column name");
          }
        },
        deleteColumn(id){
          if(id=='')
          {
            alert("something went wrong")
          }
          else
          {
            let postData = JSON.stringify({"id":id});
              axios.post(apiUrl+'deletecolumn',postData)
              .then(response => {
                if(response.data.code == 200)
                {
                    this.listColumns = response.data.data;
                }
                      
              })
              .catch(function (error) {
                      // handle error
                  console.log(error);
              })
              .then(function () {
                      // always executed
              });
          }
        },
        saveCard()
        {
          if(this.card_column_id == '')
          {
            alert("Please select column");
          }
          else if(this.card_title == '')
          {
            alert("Please enter card title");
          }
          else if(this.card_description == '')
          {
            alert("Please enter card description");
          }
          else
          {
            let postData = JSON.stringify({"id":this.card_id,"column_id":this.card_column_id,'title':this.card_title,'description':this.card_description});
              axios.post(apiUrl+'addorupdatetask',postData)
              .then(response => {
                console.log(response);
                if(response.data.code == 200)
                {
                    this.listColumns =response.data.data;
                }
                      
              })
              .catch(function (error) {
                      // handle error
                  console.log(error);
              })
              .then(function () {
                      // always executed
              });
              this.cancelCard();
              this.card_title      ='';
              this.card_description='';
              this.card_column_id  ='';
              this.card_id         = '';
          }
        },
        
        update(columnId) {
          var t = document.getElementById('column_id_'+columnId).getElementsByTagName("*");
          let columnSortDataArray = new Object();
          if(t.length >0)
          {
            columnSortDataArray['column_id']=columnId;
            columnSortDataArray['column_sort_data'] = [];
            for(let i=0; i<t.length; i++) 
            {
                columnSortDataArray['column_sort_data'].push(t[i].id);
            }
          
            let postData = JSON.stringify(columnSortDataArray);

            axios.post(apiUrl+'updatetaskorder',postData)
              .then(response => {
                if(response.data.code == 200)
                {
                    this.listColumns =response.data.data;
                }
                      
              })
              .catch(function (error) {
                      // handle error
                  console.log(error);
              })
              .then(function () {
                      // always executed
              });
          }
          
        },
        editTask(taskId)
        {
          
          let postData = JSON.stringify({"id":taskId});

          axios.post(apiUrl+'gettaskdetails',postData)
            .then(response => {
              if(response.data.code == 200)
              {
                  console.log(response.data.data);
                  this.card_title       = response.data.data.title;
                  this.card_column_id   = response.data.data.column_id;
                  this.card_description = response.data.data.description;
                  this.card_id          = response.data.data.id;
                  this.$modal.show('add_card_modal');
              }
                    
            })
            .catch(function (error) {
                    // handle error
                console.log(error);
            })
            .then(function () {
                    // always executed
            });
        },
        exportDb()
        {
          axios.post(apiUrl+'exportdb')
            .then(response => {
              console.log(response);
               var blob = new Blob([response.data],{ type: "application/sql" });
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "bemo_demo.sql";
                link.click();
            })
            .catch(function (error) {
                    // handle error
                console.log(error);
            })
            .then(function () {
                    // always executed
          });
        }
    },
}
</script>
<style type="text/css">
.list {
    display: inline-block;
    width: 250px;
    flex: 0 0 250px;
    vertical-align: top;
    overflow: auto;
    padding: 8px;
    border-radius: 8px;
    background: #f8f8f8;
    margin-right: 15px;
    margin-bottom: 10px;
    box-shadow: 0 0 5px rgb(0 0 0 / 40%);
}
.board {
    overflow: auto;
    padding: 20px;
    /* display: flex;
    flex: 1;
    position: absolute; */
    /* left: 0;
    right: 0;
    top: 118px;
    bottom: 33px;
    padding-right: 15px; */
}
.listname {
    margin: 0 0 10px;
    font-size: 14px;
    text-transform: uppercase;
    color: #999;
    padding: 5px;
    border-bottom: 1px dashed #ddd;
    text-overflow: ellipsis;
    user-select: none;
}
h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.card {
    border-radius: 5px;
    background: #fff;
    border: 1px solid #ddd;
    margin-bottom: 5px;
    padding: 8px 10px;
    -webkit-transition: all 0.3 ease;
    color: #000;
}
</style>