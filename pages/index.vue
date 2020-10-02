<template>
  <div class="container">
    <ul class="nav nav-tabs" id="vendorTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="alphabet-tab"
          data-toggle="tab"
          href="#alphabet"
          role="tab"
          >Alphabet</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="comparision-tab"
          data-toggle="tab"
          href="#comparision"
          role="tab"
        >
          Comparision
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="local-tab"
          data-toggle="tab"
          href="#local"
          role="tab"
        >
          Local
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="numbers-tab"
          data-toggle="tab"
          href="#numbers"
          role="tab"
        >
          Numbers
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="phrases-tab"
          data-toggle="tab"
          href="#phrases"
          role="tab"
        >
          Phrases
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="questions-tab"
          data-toggle="tab"
          href="#questions"
          role="tab"
        >
          Questions
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="research-tab"
          data-toggle="tab"
          href="#research"
          role="tab"
        >
          Research
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="shopping-tab"
          data-toggle="tab"
          href="#shopping"
          role="tab"
        >
          Shopping
        </a>
      </li>
    </ul>

    <div class="tab-content" id="vendorTabContent">
      <div class="tab-pane fade show active" id="alphabet" role="tabpanel">
        <h1>This is Alphabet</h1>
<br> 
        <div class="row">
          <div
            class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
          >
            <div class="panel panel-default panel-horizontal">
              <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
              </div>
              <div class="panel-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                saepe iusto nulla molestias quis esse incidunt veritatis
                exercitationem dolore officiis. Nam quos iusto officiis ullam
                itaque voluptatum fuga assumenda culpa!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="comparision" role="tabpanel">
        <h1>This is Comparision</h1>
      </div>
      <div class="tab-pane fade" id="local" role="tabpanel">
        <h1>This is Local</h1>
      </div>
      <div class="tab-pane fade" id="numbers" role="tabpanel">
        <h1>This is Numbers</h1>
      </div>
      <div class="tab-pane fade" id="phrases" role="tabpanel">
        <h1>This is Phrases</h1>
      </div>
      <div class="tab-pane fade" id="questions" role="tabpanel">
        <h1>This is Questions</h1>
      </div>
      <div class="tab-pane fade" id="research" role="tabpanel">
        <h1>This is Research</h1>
      </div>
      <div class="tab-pane fade" id="shopping" role="tabpanel">
        <h1>This is Shopping</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*
 * To see in action, go to http://jsfiddle.net/seydoggy/9jv5e8d1/
 */
.panel.panel-horizontal {
  display: table;
  width: 100%;
}
.panel.panel-horizontal > .panel-heading,
.panel.panel-horizontal > .panel-body,
.panel.panel-horizontal > .panel-footer {
  display: table-cell;
}
.panel.panel-horizontal > .panel-heading,
.panel.panel-horizontal > .panel-footer {
  width: 25%;
  border: 0;
  vertical-align: middle;
}
.panel.panel-horizontal > .panel-heading {
  border-right: 1px solid #ddd;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
}
.panel.panel-horizontal > .panel-footer {
  border-left: 1px solid #ddd;
  border-top-left-radius: 0;
  border-bottom-right-radius: 4px;
}
</style>