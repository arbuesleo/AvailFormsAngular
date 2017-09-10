# AvailFormsAngular

AvailFormsAngular é um framework criado com [AngularJs](https://angularjs.org/) para gerção de formulários dinâmicamente que foi projetado para consumir a API do framework [AvailFormsGenerator](https://github.com/leogomes26/AvailFormsGenerator)

**Duvidas ou Sugestões:** leonardogomesdev@gmail.com
**Desenvolvido Por**: Leonardo Gomes

# Pré Requisitos:

  - NodeJs 4.4.3 ou superior.

## Índice

 - [Instalação](#instalacao)
    - [Dependências](#dependencias)
 - [Diretivas](#diretivas)
    - [av-list](#avlist)
    - [av-form](#avform)    

## <a name="instalacao"></a> Instalação

Para baixar o projeto via NPM basta executar o comando abaixo na raiz de seu projeto que contém o NPM.

```sh
npm install git+https://git@github.com/leogomes26/AvailFormsAngular
```
Depois de baixar o projeto é necessário adicionar a pasta AvailFormsAngular que se encontra no diretório node_modules na raiz de seu projeto, conforme imagem abaixo.

![AddAvailForms](https://i.imgur.com/otVF3Pm.png)

Para executar a cópia para a raiz do projeto automaticamente, criei uma task no [Gulp](https://gulpjs.com/) para fazer isso através do sccript abaixo adicionado no gulpfile.js.

```js
 gulp.task('copy-AvailFormsAngular', function() {
    //Copiando Componentes
    gulp.src(['./node_modules/AvailFormsAngular/src/**/*.js',
            './node_modules/AvailFormsAngular/src/**/*.html',
            './node_modules/AvailFormsAngular/src/**/*.css'
        ])
        .pipe(gulp.dest('./app/src/AvailFormsAngular'));
    //Copiando Libs
    gulp.src(['./node_modules/AvailFormsAngular/libs/**/*'])
        .pipe(gulp.dest('./app/src/AvailFormsAngular/libs'));
    //Copiando admLTE
    gulp.src(['./node_modules/AvailFormsAngular/admLTE/**/*'])
        .pipe(gulp.dest('./app/src/AvailFormsAngular/admLTE'));
});
});
```
Para executar a cópia basta executar o comando abaixo:

```sh
    gulp copy-AvailFormsAngular
```

Sempre que o AvailFormsAngular for atualizado ou baixado via npm a task de cópia deverá ser executada. 

## <a name="dependencias"></a> Dependências

O Avail Forms têm angumas depêndencias para que ele possa ser executado, essas se encontram nos diretórios admLTE e libs, conforme imagem abaixo:

![LibsAvailForms](https://i.imgur.com/yMNjzVq.png)

Caso essas ainda não estejam em seu projeto elas devem ser adicionadas, abaixo estão as libs que devem ser importadas:

```js
    <!-- Depêndencias AvailFormsAngular -->
    
    <!--CSS-->
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="src/AvailFormsAngular/libs/bootstrap/css/bootstrap.min.css">
    <!-- Bootstrap 3.3.6 -->

    <!-- AdminLTE App -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="src/AvailFormsAngular/admLTE/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="src/AvailFormsAngular/admLTE/dist/css/skins/_all-skins.css">
    <link rel="stylesheet" href="src/AvailFormsAngular/admLTE/plugins/iCheck/all.css">
    <link rel="stylesheet" href="src/AvailFormsAngular/admLTE/plugins/select2/select2.min.css">
    <!-- AdminLTE -->

    <!--NgNotify-->
    <link rel="stylesheet" href="src/AvailFormsAngular/libs/ngNotify/ng-notify.min.css">
    <!--NgNotify-->

    <!--AvailFormsAngular-->
    <link rel="stylesheet" href="src/AvailFormsAngular/components/style.css">
    
    <!--JS-->
    <!--AvailFormsAngular-->

        <!-- jQuery 2.2.3 -->
        <script src="src/AvailFormsAngular/libs/jquery-2.2.3.min.js"></script>
        <!-- jQuery 2.2.3 -->

        <!-- Bootstrap 3.3.6 -->
        <script src="src/AvailFormsAngular/libs/bootstrap/js/bootstrap.min.js"></script>
        <!-- Bootstrap 3.3.6 -->

        <!-- AdminLTE App -->
        <script src="src/AvailFormsAngular/admLTE/dist/js/app.min.js"></script>
        <!-- AdminLTE App -->

        <!--AngularJS-->
        <script src="src/AvailFormsAngular/libs/angular.min.js"></script>
        <script src="src/AvailFormsAngular/libs/angular-touch.js"></script>
        <script src="src/AvailFormsAngular/libs/angular-route.min.js"></script>
        <script src="src/AvailFormsAngular/libs/angular-ui.js"></script>
        <script src="src/AvailFormsAngular/libs/angular-cookies.min.js"></script>
        <script src="src/AvailFormsAngular/libs/ngStorage.min.js"></script>
        <!--AngularJS-->

        <!-- UI-Bootstrap-->
        <script src="src/AvailFormsAngular/libs/ui-bootstrap-tpls-2.5.0.min.js"></script>
        <!-- UI-Bootstrap-->

        <!-- AdminLTE -->
        <script src="src/AvailFormsAngular/admLTE/plugins/jQueryUI/jquery-ui.js"></script>
        <script src="src/AvailFormsAngular/admLTE/plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="src/AvailFormsAngular/admLTE/plugins/datatables/dataTables.bootstrap.min.js"></script>
        <script src="src/AvailFormsAngular/admLTE/plugins/select2/select2.full.min.js"></script>
        <script src="src/AvailFormsAngular/admLTE/plugins/iCheck/icheck.min.js"></script>
        <script src="src/AvailFormsAngular/admLTE/plugins/bootstrap-filestyle/bootstrap-filestyle.js"></script>
        <script src="src/AvailFormsAngular/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="src/AvailFormsAngular/libs/bootstrap-datepicker/js/locales/bootstrap-datepicker.pt-BR.js"></script>
    <script src="src/AvailFormsAngular/admLTE/plugins/input-mask/jquery.inputmask.js"></script>
    <script src="src/AvailFormsAngular/admLTE/plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
    <script src="src/AvailFormsAngular/admLTE/plugins/input-mask/jquery.inputmask.extensions.js"></script>
    <script src="src/AvailFormsAngular/admLTE/plugins/input-mask/jquery.inputmask.extensions.js"></script>
    <script src="src/AvailFormsAngular/libs/ckeditor/ckeditor.js"></script>
        <!-- AdminLTE -->

        <!--Input Masks-->
        <script src="src/AvailFormsAngular/libs/angular-input-masks-standalone.min.js"></script>
        <script src="src/AvailFormsAngular/libs/angular-locale_pt-br.js"></script>
        <!--Input Masks-->

        <!--NgNotify-->
        <script src="src/AvailFormsAngular/libs/ngNotify/ng-notify.min.js"></script>
        <!--NgNotify-->

        <!-- angularBase64 -->
        <script src="src/AvailFormsAngular/libs/angular-base64-upload.js"></script>
        <!-- angularBase64 -->

        <!--AvailFormsAngular-->
        <script src="src/AvailFormsAngular/index.js"></script>
        <script src="src/AvailFormsAngular/utils/interceptor.js"></script>
        <script src="src/AvailFormsAngular/utils/utilFilter.js"></script>
        <script src="src/AvailFormsAngular/utils/utilsDate.js"></script>
        <script src="src/AvailFormsAngular/utils/utilService.js"></script>
        <script src="src/AvailFormsAngular/utils/utilsModalSrv.js"></script>
        <script src="src/AvailFormsAngular/utils/utilsUi.js"></script>
        <script src="src/AvailFormsAngular/components/Form/formEditComponent.js"></script>
        <script src="src/AvailFormsAngular/components/imagem/imagemComponent.js"></script>
        <script src="src/AvailFormsAngular/components/Listagem/formListComponent.js"></script>
        <script src="src/AvailFormsAngular/components/message/message.js"></script>
        <script src="src/AvailFormsAngular/components/modal/modalEditComponent.js"></script>
        <script src="src/AvailFormsAngular/components/modal/modalPesquisaComponent.js"></script>
        <script src="src/AvailFormsAngular/components/Pesquisa/componentPesquisa.js"></script>
        <!--AvailFormsAngular-->

        <!-- FIM Depêndencias AvailFormsAngular -->
```

Depois de aicionar os arquivos necessários devemos adicionar o modulo AvFormsGenerator em nosso App.

```js
angular.module('App', [
        'AvFormsGenerator'
    ])
```

## <a name="diretivas"></a> Diretivas

As anotações são a base de nosso projeto, é atrvés delas que iremos mapear nossas classes para geração das dados de nossa tela. São 3 as principais anotações, @Form, uma anotação a nível de classe que irá identificar essa classe como um formulário.

## <a name="avlist"></a> av-list
Essa diretiva deve ser usada para a listagem de registros referente a uma entidade, o resultado final será conforme imagem baixo:
![listage,](https://i.imgur.com/shX1Hef.png)
- Para utilizar precisamos criar um HTML com a diretiva:
    ```html
        <av-list></av-list>
    ```
 - No Controller dessa view precismos realizar algumas configurações:
    - Variável $scope.urlObj, nessa variavél deverá conter uma string com a URL que contem o serviço de listagem de seu objeto.
    - $scope.telaEdit nessa devera conter o nome da rota que está a view que irá editar seu registro.
    - $scope.objListagem, deverá ser um array de objetos com os registros que serão listados.
    
    ```js
     $scope.urlObj = 'http://localhost:9999/api/usuario';
     $scope.telaEdit = 'manterUsuario';
     $scope.objListagem = [{prop1: 'val1'} , {prop1: 'val1'}]
    ```
    Para que o componente consiga buscar os dados para montar a tela deverá existir um serviço no seguinte padrão método get na URL $scope.urlObj + '/getTelaListagem', esse deverá retornar um JSON do objeto gerado pelo método 
    ```java
    CreateForms.getDadosListagem(java.lang.Class<?>)
    ```
    do projeto [AvailFormsGenerator](https://github.com/leogomes26/AvailFormsGenerator).

Como você pode observar na imgem de listagem existe um filtro que também é gerado automáticamente, porém para que ele funcione corretamente deverá existir um serviço que responda em '/filtro' com um método GET com os parâmetros abaixo:
- campo : tipo texto, que corresponde ao nome do campo que será pesquisado
- criterio : o critério que será utilizado para fazer a busca podem ser trê opções: igual, contem, diferente.
- condicao : e por ultimo a condição para pesquisa, ou padrão que dereverá ser atendido na pesquisa.
- longClazzName : é o nome completo da entidade que a pesquisa está sendo realizada.

Esse serviço deverá ser capaz de criar a query de consulta com os parâmetros e retornar uma lisata de objetos to tipo recebido no longClazzName.

Com esses dados o componente fará a listagem automaticamente.

## <a name="avform"></a> av-form

Essa diretiva é responsável por criar o formulário para edição e inserção de uma entidade, o resultado final disso será algo parecido com a imagem abaixo:

![](https://i.imgur.com/0b9jD9r.png)

Para utiliza-la é precisso criar na view a tag abaixo:

```html
<av-form></av-form>
```
 - No Controller dessa view precismos realizar algumas configurações:
    - Variável $scope.urlObj, nessa variavél deverá conter uma string com a URL que contem o serviço de crud de seu objeto, por padrão o AvailFormsAngular irá enviar para a URL uma requisição de POST quando for inclusão e de PUT quando for atualização.
    - $scope.telaList nessa vdevera conter o nome da rota que irá listar seu registro.
    - $scope.objEdit, deverá ser seu objeto que será editado.
    - função $scope.salvaRegistro , essa função pode fazer alguma alteração no objeto que está sendo enditado antes de ser enviado para o servidor no final dela dever ser chamada a funaçaõ  $scope.save($scope.objEdit);.
 - Exemplo de Controller
    ```js
       //Variaveis obrigatórias para uso interno o framework
        $scope.urlObj = SERVICE_PATH.urlPrivate + '/cidade';
        $scope.telaList = 'cidade';
        //Fim das variaveis obrigatorias

        var carregaPagina = function() {
            if ($routeParams.id != 0) {
                RestSrv.find($scope.urlObj + '/pesquisaPorId?id=' + $routeParams.id, function(response) {
                    $scope.objEdit = response.data;
                }, true);
            } else {
                $scope.objEdit = {
                    "id": 0
                };
            }
        };

        carregaPagina();

        $scope.salvaRegistro = function() {
            $scope.save($scope.objEdit);
        };
    ```
    Na diretiva avForm ainda temos a opção de criar ações personalizadas, basta simplismente adicionoar ao scope um array chamado acoes, conforme exemplo abaixo:
    ```js
     $scope.acoes = [{
            nome: 'Inativar',
            func: function() {
                console.log('Inativando....');
            }
        }];
    ```
    Se existir esse objeto no formulário irá aparecer um botão de ações conforme imagem abaixo:
	
    ![btnAções](https://i.imgur.com/lxOlPkm.png)

Para ver melhor o funcionamento do framework recomendo que veja o exemplo disponível no repositório [ExemploAvailForms](https://github.com/leogomes26/AvailFormsExemplo.git)

## Licença
## MIT


