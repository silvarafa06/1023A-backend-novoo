use('IFMS');

db.createCollection("Curso")

db.Curso.insertMany([
{
    nome: "Informatica",
    professores:[
        {
        nome: "Jozé Souza",
        emails:["joze@ifms.edu.br","joze.souza@gmail.com"],
        telefone: "(67) 99999-9999",
        formacao: "Mestre em ciencia da computacao"
        },
        {
        nome: "Ana Maria Braga",
        emails:["ana@ifms.edu.br","ana.maria@gmail.com"],
        telefone: "(67) 98888-8888",
        formacao: "Doutora em sistemas da informacao"    
        }
    ],
    alunos:[
        {
        cpf: "123.456.789-00",
        idade: 18,
        telefones:["(67) 97777-7777","(67) 96666-6666"],
        email:"paulo.info@ifms.edu.br"
        },
        {
        cpf: "987.654.321-00",
        idade: 19,
        telefones:["(67) 95555-5555","(67) 94444-4444"],
        email:"helenna.info@ifms.edu.br"
        }
    ]
},
{
    nome:"Agricultura",
    professores:[
        {
        nome: "Marcelo Lima",
        emails:["marcelo@ifms.edu.br","marcelo.lima@gmail.com"],
        telefone: "(67) 93333-3333",
        formacao: "Mestre em agronomia"
        },
        {
        nome: "Keila Dias",
        emails:["keila@ifms.edu.br","keila.dias@gmail.com"],
        telefone: "(67) 92222-2222",
        formacao: "Doutora em ciencias agrarias"    
        }
    ],
        alunos:[
        {
        cpf: "111.222.333-44",
        idade: 20,
        telefones:["(67) 91111-1111","(67) 90000-0000"],
        email:"joao.agri@ifms.edu.br"
        },
        {
        cpf: "555.666.777-88",
        idade: 21,
        telefones:["(67) 91888-8888","(67) 91777-7777"],
        email:"fernanda.agri@ifms.edu.br"
        }
    ]
}
]);